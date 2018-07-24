#!/usr/bin/node
// 02-static-http-server.js

const http = require('http'),
      fs   = require('fs'),
      path = require('path');

var www = process.argv[2] || 'www';

var root = path.isAbsolute(www) ? www : path.join(__dirname, www);

console.log('root:', root);

http.createServer((req, res) => {
  var url = 'http://' + req.headers.host + req.url;

  console.log('URL:', url);
  console.log(req.headers);
  console.log('');

  var fileName = root + req.url;
  fs.stat(fileName, (err, stat) => {
    if(err) {
      if('ENOENT' === err.code) {
        res.statusCode = 404;
        res.end(fileName + ' NOT FOUND!');
      } else {
        res.statusCode = 500;
        res.end(err.message);
      }
    } else {
      res.setHeader('Content-Length', stat.size);
      fs.createReadStream(fileName).pipe(res);
    }
  });
}).listen(8000);
