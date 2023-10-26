#!/usr/bin/env node

const log  = console.log,
      url  = process.argv[2],
      headers = { 'User-Agent': '01-my-curl.js' };

if(!url) {
  log('Usage: cmd url');
  process.exit();
}

fetch(url, headers)
  .then(res => {
    log(`HTTP/1.1 ${res.status} ${res.statusText}`);
    log(res.headers);
    return res.text();
  })
  .then(body => log(body));
