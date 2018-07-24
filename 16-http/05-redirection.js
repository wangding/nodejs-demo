#!/usr/bin/node

const http = require('http'),
      url  = require('url');

var addr = process.argv[2] || 'http://www.sian.com/';

function opt(addr) {
  var options = url.parse(addr);

  options.method = 'GET';
  options.headers = { 'User-Agent': '02-my-curl.js' };

  return options;
}

function get(options) {
  http.get(options, (res) => {
    console.log('status:', res.statusCode);
    console.log('status message:', res.statusMessage);
    console.log('HTTP version:', res.httpVersion);
    console.log('');

    console.log(res.headers);
    console.log('');

    if(res.statusCode < 400 && res.statusCode >= 300) {
      get(opt(res.headers.location));
    } else {
      res.pipe(process.stdout);
    }
  });
}

get(opt(addr));

