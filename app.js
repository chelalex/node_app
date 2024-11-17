// app.js
const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!\n');
});

// Экспортируем приложение, а не сервер
module.exports = app;

