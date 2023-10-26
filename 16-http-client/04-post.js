#!/usr/bin/env node

const http = require('http');

const msg = process.argv[2],
      log = console.log,
      url = 'http://localhost:8080';

if(!msg) {
  log('Usage: cmd data');
  process.exit();
}

const req = http.request(url, {method: 'POST'}, res => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');
  res.pipe(process.stdout);
});

req.end(msg + '\n');
