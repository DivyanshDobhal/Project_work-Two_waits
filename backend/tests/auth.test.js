const request = require('supertest');
const express = require('express');
const healthRoutes = require('../routes/health');

const app = express();
app.use('/api/health', healthRoutes);

describe('Health route', () => {
  it('returns status ok', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.timestamp).toBeDefined();
  });
});
