#!/usr/bin/env node

const http = require('http'),
      fs   = require('fs'),
      log  = console.log,
      qs   = require('querystring');

let items = [];

http.createServer((req, res) => {
  if(req.url != '/') { return err(res); }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  switch(req.method) {
    case 'GET':
      show(res);
      break;

    case 'POST':
      add(req, res);
      break;

    default:
      err(res);
      break;
  }
}).listen(8080);

function err(res) {
  let msg = 'Not found';
  res.writeHead(404, {
    'Content-Length': msg.length,
    'Content-Type': 'text/plain'
  });
  res.end(msg);
}

function show(res) {
  let html = fs.readFileSync('./11-template.html').toString('utf8'),
      items_html = items.map(item => '<li>' + item + '</li>').join('\n');

  html = html.replace('%', items_html); 
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(html),
    'Access-Control-Allow-Origin': '*'
  });

  res.end(html);
}

function add(req, res) {
  let body = '';

  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    let item = qs.parse(body).item;
    if(item !== '') {  items.push(item);  }

    show(res);
  });
}
