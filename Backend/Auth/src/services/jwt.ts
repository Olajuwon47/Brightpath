// src/config/jwt.ts
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

/**
 * Generate a secure JWT secret automatically
 */
export function generateJWTSecret(): string {
  return crypto.randomBytes(64).toString('hex');
}

/**
 * Get or create JWT secret with persistence
 */
export function getOrCreateJWTSecret(): string {
  const secretFile = path.join(process.cwd(), '.jwt-secret');
  
  try {
    // Try to read existing secret
    if (fs.existsSync(secretFile)) {
      const secret = fs.readFileSync(secretFile, 'utf8').trim();
      if (secret && secret.length >= 32) {
        return secret;
      }
    }
  } catch (error) {
    console.warn('Could not read existing JWT secret file');
  }
  
  // Generate new secret
  const newSecret = generateJWTSecret();
  
  try {
    // Save secret to file (add to .gitignore!)
    fs.writeFileSync(secretFile, newSecret, { mode: 0o600 }); // Restrict file permissions
    console.log('Generated new JWT secret and saved to .jwt-secret file');
  } catch (error) {
    console.warn('Could not save JWT secret to file, using in-memory only');
  }
  
  return newSecret;
}

/**
 * Get JWT secret with fallback options
 */
export function getJWTSecret(): string {
  // 1. Try environment variable first
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length >= 32) {
    return process.env.JWT_SECRET;
  }
  
  // 2. Try to get or create persistent secret
  const secret = getOrCreateJWTSecret();
  
  // 3. Warn if using auto-generated secret in production
  if (process.env.NODE_ENV === 'production') {
    console.warn('⚠️  WARNING: Using auto-generated JWT secret in production. Set JWT_SECRET environment variable for better security.');
  }
  
  return secret;
}