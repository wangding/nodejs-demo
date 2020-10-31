#!/usr/bin/env node

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Hello world!');
});

server.listen(8080);
