#!/usr/bin/env node

const http = require('http'),
      url  = require('url'),
      log  = console.log;

let msg     = process.argv[2] || 'Hello! I am wangding.',
    opt= url.parse('http://localhost:8080');

opt.method = 'POST';

let req = http.request(opt, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);
});

req.end(msg + '\n');
