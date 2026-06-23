// src/app.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from '../routes/authRoutes'; // ✅ works when running via ts-node from root
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Api routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/', (_req, res) => {
  res.json({ message: 'Auth Service is running' });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ 
    error: 'Route not found',
    message: `The requested route '${req.method} ${req.originalUrl}' does not exist`,
    timestamp: new Date().toISOString()
  });
});

// Global error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction):void => {
  console.error('Error:', err);

   // Now, PrismaClientKnownRequestError is correctly imported and can be used with instanceof
   if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      // Unique constraint violation
      const target = err.meta?.target as string[] | undefined;
      const field = target?.[0] || 'field';
      res.status(400).json({ error: `${field} already exists` });
      return
      
    }
    // You can add more Prisma error codes here if needed, e.g., P2025 for record not found
  }
  
  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  res.status(err.status || 500).json({
    error: isDevelopment ? err.message : 'Internal server error',
    ...(isDevelopment && { stack: err.stack })
  });
});

export default app;
