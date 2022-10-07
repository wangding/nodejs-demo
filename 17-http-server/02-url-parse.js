#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

print(new URL('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f'));

http.createServer((req, res) => {
  console.log('req URL:\t', req.url);

  print(new URL(req.url, `http://${req.headers.host}`));

  res.end('ok!');
}).listen(8080);

function print(url) {
  log('href:\t\t', url.href);
  log('protocol:\t', url.protocol);
  log('username:\t', url.username);
  log('password:\t', url.password);
  log('hostname:\t', url.hostname);
  log('port:\t\t', url.port);
  log('host:\t\t', url.host);
  log('pathname:\t', url.pathname);
  log('search:\t\t', url.search);
  log('hash:\t\t', url.hash);

  log('pathname parse:\t', url.pathname.split('/'));
  log('age:\t\t', url.searchParams.get('age'));
  log('gender:\t\t', url.searchParams.get('gender'));
  log();
}
