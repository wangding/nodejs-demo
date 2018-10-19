#!/usr/bin/node

var http = require('http'),
    zlib = require('zlib'),
    url = require('url');

http.createServer((req, res) => {
  greenMsg('[REQUEST HEADER]');
  console.log(req.headers);

  var options = url.parse(req.url);
  options.headers = req.headers;

  var proxyRequest = http.request(options, (proxyResponse) => {
    proxyResponse.on('data', (chunk) => {
      greenMsg('[RESPONSE BODY]');
      console.log(zlib.gunzipSync(chunk).toString('utf8'));
      res.write(chunk, 'binary'); 
    });
    proxyResponse.on('end', () => { res.end();});

    greenMsg('[RESPONSE HEADER]');
    console.log(proxyResponse.statusCode, proxyResponse.headers);
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
  });

  req.on('data', (chunk) => {
    console.log(chunk);
    proxyRequest.write(chunk, 'binary');
  });

  req.on('end', () => {
    proxyRequest.end();
  });
}).listen(8080);

function greenMsg(msg) {  console.log('\n\033[1;32m' + msg + '\033[1;37m'); }
