#!/usr/bin/node

var http = require('http');

http.createServer(function(req, res) {
  var body = 'hello world!';

  /*
  res.statusCode = 404;
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.setHeader('Content-Type', 'text/plain');
  */

  res.writeHead(404, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });

  console.log(req.headers);
  req.pipe(process.stdout);
  console.log('');

  res.end(body);
}).listen(8080);
