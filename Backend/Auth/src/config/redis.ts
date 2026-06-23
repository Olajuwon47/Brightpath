// config/redis.ts
import { createClient } from 'redis';

// Redis Client CREAte
export const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.error('❌Redis Client Error', err));

// Redis Client connection
export async function connectRedis() {
  await redisClient.connect();
  console.log('Connected to Redis');
}

// Redis Client diconnection
export async function disconnectRedis() {
  await redisClient.quit();
  console.log('🛑 Redis disconnected');
}
