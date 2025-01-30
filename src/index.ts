import express, { Request, Response } from 'express';
import pino from 'pino';

const logger = pino();

const app = express();
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

export { app };

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`Server running on ${PORT}`);
  });
}
