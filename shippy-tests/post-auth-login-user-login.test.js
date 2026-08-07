const request = require('supertest');
const app = require('./app');

it('should login a user with valid credentials', async () => {
  const response = await request(app)
    .post('/auth/login')
    .send({ email: 'test@example.com', password: 'password123' });
  expect(response.status).toBe(302);
  expect(response.headers.location).toBe('/');
});