#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring');

var items = [];

http.createServer(function(req, res) {
  if(req.url != '/') { return err(res); }

  console.log(req.headers);
  console.log('');

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
  var msg = 'Not found';
  res.writeHead(404, {
    'Content-Length': msg.length,
    'Content-Type': 'text/plain'
  });
  res.end(msg);
}

function show(res) {
  var html = fs.readFileSync('./template.html').toString('utf8'),
      items_html = items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n');

  html = html.replace('%', items_html); 
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(html),
    'Access-Control-Allow-Origin': '*'
  });

  res.end(html);
}

function add(req, res) {
  var body = '';

  req.on('data', function(chunk) { body += chunk; });
  req.on('end', function() {
    var item = qs.parse(body).item;
    if(item !== '') {  items.push(item);  }

    show(res);
  });
}
