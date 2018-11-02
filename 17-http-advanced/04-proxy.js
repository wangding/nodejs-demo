#!/usr/bin/node

const http = require('http'),
      url  = require('url');

http.createServer((req, res) => {
  console.log(req.headers);

  var options = url.parse(req.url);
  options.headers = req.headers;

  var proxyRequest = http.request(options, (proxyResponse) => {
    proxyResponse.on('data', (chunk) => {
      console.log(chunk.toString('utf8'));
      res.write(chunk, 'binary'); 
    });
    proxyResponse.on('end', () => { res.end(); });

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

