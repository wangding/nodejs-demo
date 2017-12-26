#!/usr/bin/node

var http = require('http'),
    fs = require('fs'),
    buf = {};

var root = __dirname;

http.createServer(function(req, res) {
  var fileName = root + req.url;
  sendFile(res, fileName);
}).listen(8080);

function sendFile(res, fileName) {
  if(!buf[fileName]) { console.log('no memory!'); buf[fileName] = fs.readFileSync(fileName); }

  res.end(buf[fileName]);
}
