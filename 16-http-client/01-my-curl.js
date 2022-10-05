#!/usr/bin/env node

const http = require('http'),
      log  = console.log,
      url  = process.argv[2] || 'http://sample.wangding.co/web/one-div.html',
      headers = { 'User-Agent': '01-my-curl.js' };

http.get(url, {headers}, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);
});
