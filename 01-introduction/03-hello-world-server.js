#!/usr/bin/node

const http = require('http');

const server = http.createServer();
server.on('request', function(req, res) {
  res.end('hello');
});

server.listen(8080);
