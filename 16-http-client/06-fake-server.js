#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  if(req.url == '/') {
    res.statusCode = 301;
    res.setHeader('location', '/abc');
    res.end('Moved Permanently');
  } else if(req.url == '/abc') {
    res.statusCode = 301;
    res.setHeader('location', '/def');
    res.end('Moved Permanently');
  } else if(req.url == '/def') {
    res.statusCode = 200;
    res.end('<body><h1>hello world</h1></body>');
  } else {
    res.end('not found');
  }
}).listen(8080);
