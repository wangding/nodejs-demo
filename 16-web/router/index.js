const express = require('express');
const app = express();

const books = require('./router/books.js');

app.get('/', function(req, res) {
  res.end('hello world');
});

app.use('/books', books);

app.listen(8080);
