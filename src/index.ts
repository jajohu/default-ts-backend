import express, { Request, Response } from 'express';
import pino from 'pino';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const logger = pino();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.get('/health', (_req: Request, res: Response) => {
  logger.debug('Received health check request');
  res.status(200).json({ status: 'ok' });
});

export { app };

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    logger.info(`Server running on ${PORT}`);
  });
}
