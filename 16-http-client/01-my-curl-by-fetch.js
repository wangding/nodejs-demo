#!/usr/bin/env node

const log  = console.log,
      url  = process.argv[2] || 'http://sample.wangding.co/web/one-div.html',
      headers = { 'User-Agent': '01-my-curl.js' };

fetch(url, headers)
  .then(res => {
    log(`HTTP/1.1 ${res.status} ${res.statusText}`);
    log(res.headers);
    return res.text();
  })
  .then(body => log(body));
