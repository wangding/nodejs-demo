#!/usr/bin/node

const http = require('http'),
      fs   = require('fs');

var buf = {};

http.createServer((req, res) => {
  sendFile(req, res);
}).listen(8080);

function sendFile(req, res) {
  var file = __dirname + req.url;

  if(!buf[file]) {
    if(!fs.existsSync(file)) {
      res.statusCode = 404;
      res.end(`${file} not exist!`);
      
      return;
    }

    console.log('Disk IO:', file);
    buf[file] = fs.readFileSync(file);   
  }

  res.end(buf[file]);
  //console.log('\n', buf, '\n');
}
