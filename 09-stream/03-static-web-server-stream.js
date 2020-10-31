#!/usr/bin/env node

const http = require('http'),
      log  = console.log,
      fs   = require('fs');

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  let file = __dirname + req.url;

  // 错误处理方式一：主动防御
  if(fs.existsSync(file)) {
    fs.createReadStream(file).pipe(res);
  } else {
    res.statusCode = 404;
    res.end(req.url + ' not exist!');
  }

  /* 错误处理方式二：error 事件捕获
  let s = fs.createReadStream(file);
  s.on('error', (err) => {
    console.log(err.message);
    res.statusCode = 404;
    res.end(err.message);
  });
  s.pipe(res);
  */
}).listen(8080);
