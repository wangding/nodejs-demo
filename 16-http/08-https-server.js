#!/usr/bin/node

const https = require('https'),
      fs    = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./key-cert.pem')
};

https.createServer(options, (req, res) => {
  res.end('hello world');
}).listen(8080);
