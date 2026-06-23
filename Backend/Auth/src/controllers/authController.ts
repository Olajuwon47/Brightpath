import { PrismaClient, CustomerAuth} from '@prisma/client';
import { hashPassword, comparePasswords } from '../services/hash';
import jwt from 'jsonwebtoken';
import { redisClient } from '../config/redis';
import {  Request, Response, NextFunction } from 'express';
import { RegisterRequestBody, loginRegisterRequestBody } from '../types'
import { getJWTSecret } from '../services/jwt'

export const prisma = new PrismaClient();

export async function registerUser(req: Request, res:Response, next: NextFunction): Promise<void> {
  try {
    const { name, email, username, password, phone, state, region, role }: RegisterRequestBody = req.body;

    const existingEmail = await prisma.customerAuth.findUnique({ where: { email } });
    const existingUsername = await prisma.customerAuth.findUnique({ where: { username } });

    if (existingEmail) {
      res.status(400).json({ error: `Email ${email} already exists` });
      return 
    }
    if (existingUsername) {
      res.status(400).json({ error: `Username ${username} already exists` });
      return 
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.customerAuth.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
        phone,
        state,
        region,
        role: role || 'CLIENT'
      }
    });
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json({ message: 'User registered', user: userWithoutPassword });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
    next(err)
  }
}

export async function loginUser(req: Request, res:Response, next: NextFunction): Promise<void> {
  try {
    const { email,username, password }: loginRegisterRequestBody = req.body;
        
    // Validate input: ensure either email or username is provided
    if (!email && !username) {
      res.status(400).json({ error: 'Email or username is required' });
      return;
    }

    // Check Redis cache first
    let user: CustomerAuth | null = null;
    let cacheKey: string | null = null;
 
    // Check cache based on provided input
    if (email) {
      cacheKey = `user:email:${email}`;
      try {
        const cachedUser = await redisClient.get(cacheKey);
        if (cachedUser) {
          user = JSON.parse(cachedUser) as CustomerAuth;
        }
      } catch (redisError) {
        console.error('Redis error on get (email):', redisError);
        // Continue to database query
      }
    } else if (username) {
      cacheKey = `user:username:${username}`;
      try {
        const cachedUser = await redisClient.get(cacheKey);
        if (cachedUser) {
          user = JSON.parse(cachedUser) as CustomerAuth;
        }
      } catch (redisError) {
        console.error('Redis error on get (username):', redisError);
        // Continue to database query
      }
    }

   // If not in cache or Redis failed, query database
    if (!user) {
      if (email) {
        user = await prisma.customerAuth.findUnique({ where: { email } });
      } else if (username) {
        user = await prisma.customerAuth.findUnique({ where: { username } });
      }

      // If user found, cache it
      if (user) {
        try {
          // Cache by both email and username for future lookups
          await redisClient.set(`user:email:${user.email}`, JSON.stringify(user), { EX: 60 * 60 * 24 });
          await redisClient.set(`user:username:${user.username}`, JSON.stringify(user), { EX: 60 * 60 * 24 });
          //cache by user ID for consistency
          await redisClient.set(`user:${user.id}`, JSON.stringify(user), { EX: 60 * 60 * 24 });
        } catch (redisError) {
          console.error('Redis error on set:', redisError);
          // Continue, as caching is secondary
        }
      }
    }

    // If user not found, return 404
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Verify password
    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid Password credentials' });
      return
    }
    
    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, getJWTSecret(), {
      expiresIn: '1d'
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
    next(err)
  }
}
