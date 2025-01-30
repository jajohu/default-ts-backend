import request from 'supertest';
import { app } from '../index';

describe('API Routes', () => {
  it('should return 200 OK on health check', async () => {
    const response = await request(app).get('/health').expect(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
