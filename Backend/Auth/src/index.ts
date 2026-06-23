// index.ts
import app from './utils/app';
import { connectDatabases, disconnectDatabases } from './config';

const PORT = process.env.PORT || 3000;

// Add this at the very top of index.ts
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  console.error('Stack:', error.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

async function startServer() {
  await connectDatabases();
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

startServer();

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received. Cleaning up...');
  await disconnectDatabases();
  process.exit(0);
});
