#!/usr/bin/node

const http = require('http'),
      fs   = require('fs');

var buf = {};

http.createServer(function(req, res) {
  sendFile(res, req.url);
}).listen(8080);

function sendFile(res, url) {
  var file = __dirname + url;

  if(!buf[file]) {
    if(!fs.existsSync(file)) {
      res.statusCode = 404;
      res.end('%s not exist!', file);
      
      return;
    }

    buf[file] = fs.readFileSync(file);   
  }

  res.end(buf[file]);
  console.log('\n', buf, '\n');
}
