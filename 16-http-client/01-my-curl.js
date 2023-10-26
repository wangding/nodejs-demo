#!/usr/bin/env node

const http = require('http'),
      log  = console.log,
      url  = process.argv[2],
      headers = { 'User-Agent': '01-my-curl.js' };

if(!url) {
  log('Usage: cmd url');
  process.exit();
}

http.get(url, {headers}, res => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);
});
