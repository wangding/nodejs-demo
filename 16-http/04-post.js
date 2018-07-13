#!/usr/bin/node

var http = require('http');
var url = require('url');

var msg = process.argv[2] || 'hell! I am wangding.';

var options = url.parse('http://localhost:8080');
options.method = 'POST';
console.log('OPTIONS:', options);

var req = http.request(options, function(res) {
  console.log('status:', res.statusCode);
  console.log('headers:', res.headers);
  console.log('');

  res.setEncoding('utf8');
  res.on('data', function(data) {
    console.log('body:', data);
  });
}).on('error', function(err) {
  console.log('problem with request:', err.message);
});

req.write(msg + '\n');
req.end();
