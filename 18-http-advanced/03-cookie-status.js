#!/usr/bin/env node

const http = require('http');

let total = 0,
    count;

http.createServer((req, res) => {
  console.log('Total request:', ++total);

  if(req.url === '/favicon.ico') return;
  
  if(typeof req.headers['cookie'] === 'undefined') {
    count = 1;
  } else {
    let pair = req.headers['cookie'].split('=');
    count = Number(pair[1]) + 1;
  }

  res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);
  res.end(`${count} times`);
}).listen(8080);
