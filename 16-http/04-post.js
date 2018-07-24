#!/usr/bin/node

const http = require('http'),
      url  = require('url');

var msg = process.argv[2] || 'hell! I am wangding.';

var options = url.parse('http://localhost:8080');
options.method = 'POST';
console.log('OPTIONS:', options);

var req = http.request(options, (res) => {
  console.log('status:', res.statusCode);
  console.log('headers:', res.headers);
  console.log('');

  res.setEncoding('utf8');
  res.on('data', (data) => {
    console.log('body:', data);
  });
}).on('error', (err) => {
  console.log('problem with request:', err.message);
});

req.write(msg + '\n');
req.end();
