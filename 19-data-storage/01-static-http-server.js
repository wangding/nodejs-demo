#!/usr/bin/env node

const http = require('http'),
      fs   = require('fs');

let buf = {};

http.createServer((req, res) => {
  sendFile(req, res);
}).listen(8080);

function sendFile(req, res) {
  let file = __dirname + req.url;

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
