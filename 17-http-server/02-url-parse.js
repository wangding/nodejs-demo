#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

const addr = new URL('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
const [age, gender] = addr.searchParams.values();

log(addr);
log(`pathname: ${addr.pathname}`);
log(`age:    ${age}\ngender: ${gender}`);

http.createServer((req, res) => {
  log('req URL:', req.url);
  log(new URL(req.url, `http://${req.headers.host}`));
  res.end('ok!');
}).listen(8080);
