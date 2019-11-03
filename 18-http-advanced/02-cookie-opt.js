#!/usr/bin/node

const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  log(req.headers['cookie']);
  log(req.headers['cookie'].split(';'));

  res.setHeader('Set-cookie', ['name=wangding; Httponly', 'age=42; max-age=1000']);
  res.end('hello world!');
}).listen(8080);
