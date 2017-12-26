#!/usr/bin/node

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  console.log('==========');
  console.log(req.headers);

  var fileName = __dirname + req.url;
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);
