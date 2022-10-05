#!/usr/bin/env node

const http = require('http');

const msg = process.argv[2] || 'Hello! I am wangding.',
      log = console.log,
      method = 'POST',
      url = 'http://localhost:8080';

let req = http.request(url, {method}, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);
});

req.end(msg + '\n');
