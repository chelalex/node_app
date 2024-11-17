// __tests__/app.test.js

const request = require('supertest'); // предполагаем, что используете supertest
const app = require('../app'); // Путь к вашему файлу с сервером

jest.setTimeout(15000); // Увеличиваем таймаут для всех тестов до 15 секунд

describe('GET /', () => {
  let server;

  beforeAll((done) => {
    // Запуск сервера до выполнения тестов
    server = app.listen(3000, () => done());
  });

  afterAll((done) => {
    // Закрытие сервера после завершения всех тестов
    server.close(done);
  });

  it('responds with Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!\n');
  });
});

