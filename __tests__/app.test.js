// __tests__/app.test.js
const http = require('http');
const request = require('supertest');
const app = require('../app');  // Импортируем сервер

const server = http.createServer(app);

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!\n');
  });
});

