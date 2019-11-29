#!/usr/bin/node

const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  if(typeof req.headers['cookie'] === 'undefined') {
    res.setHeader('Set-cookie', ['name=wangding; Httponly', 'age=42; max-age=1000']);
  } else {
    log(req.headers['cookie']);
  }

  res.end('hello cookie!');
}).listen(8080);
