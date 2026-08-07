const request = require('supertest');
const app = require('./app');

it('should load the shop page with products', async () => {
  const response = await request(app).get('/shop');
  expect(response.status).toBe(200);
  expect(response.text).toContain('Products');
});