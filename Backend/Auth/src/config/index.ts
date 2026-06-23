// config/index.ts
import { connectRedis, disconnectRedis } from './redis'
import { connectPostgres, disconnectPostgres } from './postgres'

// Connect both databases
export async function connectDatabases() {
  try {
    await connectPostgres();
    console.log('✅ Connected to PostgreSQL in central connection successful');

    await connectRedis();
    console.log('✅ Connected to Redis in central connection successful');
  } catch (error) {
    console.error('❌ Failed to connect to databases in central connection:', error);
    process.exit(1);
  }
}

// DisConnect both databases
export async function disconnectDatabases() {
  await disconnectRedis();
  await disconnectPostgres();
  console.log('🛑 Database connections closed from central');
}

