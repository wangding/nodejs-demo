#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      log  = console.log;

var addr = process.argv[2] || 'http://www.sian.com/';

function opt(addr) {
  var options = url.parse(addr);

  options.method = 'GET';
  options.headers = { 'User-Agent': '05-redirection.js' };

  return options;
}

function get(options) {
  http.get(options, (res) => {
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');

    if(res.statusCode < 400 && res.statusCode >= 300) {
      get(opt(res.headers.location));
    } else {
      res.pipe(process.stdout);
    }
  });
}

get(opt(addr));

