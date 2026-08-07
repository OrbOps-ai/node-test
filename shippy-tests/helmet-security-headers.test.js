const request = require('supertest');
const app = require('./app');

it('should set security headers', async () => {
  const response = await request(app).get('/');
  expect(response.headers['x-dns-prefetch-control']).toBe('off');
  expect(response.headers['x-frame-options']).toBe('SAMEORIGIN');
});