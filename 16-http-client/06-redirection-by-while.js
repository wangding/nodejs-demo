#!/usr/bin/env node

/* global Promise: true */

const http = require('http');
const baseURL = 'http://localhost:8080';

function get(url) {
  return new Promise(resolve => {
    http.get(url, res => {
      console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
      console.log(res.headers);
      console.log();

      if(res.statusCode>=300 && res.statusCode<400) {
        resolve(baseURL + res.headers.location);
      } else {
        res.pipe(process.stdout);
        resolve('');
      }
    });
  });
}

async function main() {
  let url = baseURL;
  do {
    url = await get(url);
  } while(url);
}

main();
