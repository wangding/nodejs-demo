#!/usr/bin/node

const http = require('http'),
      log  = console.log,
      url  = require('url');

var addr    = process.argv[2] || 'http://sample.wangding.in/web/one-div.html',
    options = url.parse(global.encodeURI(addr));

options.headers = {
  'User-Agent': '01-my-curl.js'
};

http.get(options, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);
});
