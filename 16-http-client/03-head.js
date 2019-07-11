#!/usr/bin/node

const http = require('https'),
      url  = require('url'),
      log  = console.log;

var options = url.parse('https://www.baidu.com');
options.method = 'HEAD';

var req = http.request(options, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
});

req.end();
