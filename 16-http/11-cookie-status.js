#!/usr/bin/node

const http = require('http');
var count;

http.createServer((req, res) => {
  if(typeof req.headers['cookie'] === 'undefined') {
    count = 1;
  } else {
    var pair = req.headers['cookie'].split('=');
    count = Number(pair[1]) + 1;
  }

  res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);
  res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>状态保持</title></head><body><h1>你这是第 ${count} 次访问本网站！</h1></body></html>`);
}).listen(8080);
