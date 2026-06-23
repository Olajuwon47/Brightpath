// config/postgres.ts
import { PrismaClient } from '@prisma/client';

// PostgreSQL Prisma Client
export const postgresClient = new PrismaClient();

// PostgreSQL Prisma Client connection
export async function connectPostgres() {
  await postgresClient.$connect();
  console.log('✅ Connected to PostgreSQL');
}

// PostgreSQL Prisma Client disconnection
export async function disconnectPostgres() {
  await postgresClient.$disconnect();
  console.log('🛑 PostgreSQL disconnected');
}
