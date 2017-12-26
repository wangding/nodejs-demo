#!/usr/bin/node

var http = require('http'),
    url = require('url');

http.createServer(function(req, res) {
  console.log(req.headers);

  var options = url.parse(req.url);
  options.headers = req.headers;

  var proxyRequest = http.request(options, function(proxyResponse) {
    proxyResponse.on('data', function(chunk) {
      console.log(chunk.toString('utf8'));
      res.write(chunk, 'binary'); 
    });
    proxyResponse.on('end', function() {res.end();});

    console.log(proxyResponse.statusCode, proxyResponse.headers);
    res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
  });

  req.on('data', function(chunk) {
    console.log(chunk);
    proxyRequest.write(chunk, 'binary');
  });

  req.on('end', function() {
    proxyRequest.end();
  });
}).listen(8080);

