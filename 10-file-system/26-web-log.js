#!/usr/bin/env node

const fs   = require('fs'),
      http = require('http');

function log(req) {
  const now  = new Date(Date.now()),
        file = `/home/wangding/logs/${now.toISOString().substring(0,10)}.log`,
        line = `${now.toLocaleString()}\t${req.method}\t${req.url}\tHTTP/${req.httpVersion}\n`
             + `${now.toLocaleString()}\t${JSON.stringify(req.headers)}\n`;
  fs.appendFileSync(file, line);
}

http.createServer((req, res) => {
  log(req);
  res.end('hello');
}).listen(8080);
