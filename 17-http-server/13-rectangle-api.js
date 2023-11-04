#!/usr/bin/env node

const http = require('http');

http.createServer((req, res)=>{
  const addr = new URL(req.url, `http://${req.headers.host}`);
  let [width, height] = addr.searchParams.values();
  [width, height] = [Number(width), Number(height)];

  console.log(req.url);
  const rect = {
    area: width * height,
    perimeter: 2 * (width + height)
  };

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(rect));
}).listen(3000);
