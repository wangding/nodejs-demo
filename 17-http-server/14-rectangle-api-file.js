#!/usr/bin/env node

const http   = require('http'),
      fs     = require('fs'),
      {join} = require('path');

http.createServer((req, res)=>{
  const addr = new URL(req.url, `http://${req.headers.host}`);
  if(addr.pathname == '/api') {
    apiServer(req, res);
  } else {
    fileServer(req, res);
  }
}).listen(3000);

function fileServer(req, res) {
  let fileName = req.url.slice(1);
  fileName = join(__dirname, 'www', fileName);
  console.log(fileName);

  if(!fs.existsSync(fileName)) {
    res.statusCode = 404;
    res.end(`${req.url} not found`);
    return;
  }

  res.end(fs.readFileSync(fileName, 'utf8'));
}

function apiServer(req, res) {
  const addr = new URL(req.url, `http://${req.headers.host}`);

  let [width, height] = addr.searchParams.values();
  [width, height] = [Number(width), Number(height)];

  const rect = {
    area: width * height,
    perimeter: 2 * (width + height)
  };

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(rect));
}
