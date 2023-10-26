#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

const baseURL = 'http://localhost:8080';

function get(url) {
  http.get(url, res => {
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');

    if(res.statusCode < 400 && res.statusCode >= 300) {
      get(baseURL + res.headers.location);
    } else {
      res.pipe(process.stdout);
    }
  });
}

get(baseURL);
