#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      zlib = require('zlib'),
      path = require('path');

var www = process.argv[2] || 'www';

var root = path.isAbsolute(www) ? www : path.join(__dirname, www);

console.log('root:', root);

http.createServer((req, res) => {
  console.log(req.headers);
  console.log('');

  var file = root + req.url;
  if(fs.existsSync(file)) {
    res.setHeader('Content-Encoding', 'gzip');
    fs.createReadStream(file).pipe(zlib.createGzip()).pipe(res);
  } else {
    res.statusCode = 404;
    res.end(file + ' NOT FOUND!');
  }
}).listen(8080);
