#!/usr/bin/env node

const http = require('http');

http.createServer((req, res) => {
  res.end('Hello world!');
}).listen(8080);
