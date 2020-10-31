#!/usr/bin/node

const http = require('http'),
      zlib = require('zlib'),
      chalk= require('chalk'),
      url = require('url');

http.createServer((req, res) => {
  greenMsg('[REQUEST HEADER]');
  console.log(req.headers);

  let options = url.parse(req.url);
  options.headers = req.headers;

  let proxyRequest = http.request(options, (proxyResponse) => {
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

function greenMsg(msg) {  console.log(chalk.greenBright(msg)); }
