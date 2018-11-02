#!/usr/bin/node

const http = require('http'),
      log  = console.log;

http.createServer((req, res) =>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  log('\nUser-Agent:', req.headers['user-agent']);
  log('Host:', req.headers.host);
  log('Content-Type:', req.headers['content-type']);
  log('');

  req.pipe(process.stdout);

  res.end('OK!');
}).listen(8080);
