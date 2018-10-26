#!/usr/bin/node

const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  if(req.url != '/') {
    err(res);
    return;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method === 'POST') {
    req.pipe(process.stdout);
    res.end('OK!');
  } else {
    err(res);
  }
}).listen(8080);

function err(res) {
  var msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}
