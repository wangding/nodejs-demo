#!/usr/bin/node

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./key-cert.pem')
}

https.createServer(options, function(req, res) {
  res.end('hello world');
}).listen(8080);
