const request = require('supertest');
const app = require('./app');

it('should return a list of products for admin', async () => {
  const response = await request(app).get('/admin/products');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('products');
});