#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      querystring = require('querystring'),
      log  = console.log;

http.createServer((req, res) => {
  console.log('HTTP request URL:', req.url);

  //parseURL(req.url);
  parseURL('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');

  res.end('ok!');
}).listen(8080);

function parseURL(strURL) {
  var path = url.parse(strURL);

  log('href:', path.href);
  log('protocol:', path.protocol);
  log('auth:', path.auth);
  log('hostname:', path.hostname);
  log('port:', path.port);
  log('host', path.host);
  log('pathname:', path.pathname);
  log('search:', path.search);
  log('query:', path.query);
  log('slashes:', path.slashes);
  log('hash:', path.hash);

  log('URL parse:', path.pathname.split('/'));
  log('QueryString parse:', querystring.parse(path.query));
}
