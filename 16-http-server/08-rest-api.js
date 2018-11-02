#!/usr/bin/node

const http = require('http');
var items = [];

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log('');

  switch(req.method) {
    case 'GET':
      select(res);
      break;

    case 'POST':
      insert(req, res);
      break;

    case 'DELETE':
      del(req, res);
      break;

    case 'PUT':
      update(req, res);
      break;

    default:
      break;
  }
}).listen(8080);

function select(res) {
  var body = JSON.stringify(items);

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain; charset="utf-8"',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(body);
}

function insert(req, res) {
  var item = '';

  req.on('data', function(data) { item += data; });
  req.on('end', function() {
    items.push(item);
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Insert OK!');
  });
}

function del(req, res) {
  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  var i = parseInt(arg[1]);

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!items[i]) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    items.splice(i, 1);
    res.statusCode = 200;
    res.end('Delete OK');
  }
}

function update(req, res) {
  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  var item = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (chunk) => { item += chunk; });
  req.on('end', () => {
    var i = parseInt(arg[1]);

    if(!items[i]) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      items[i] = item;
      res.statusCode = 200;
      res.end('update OK');
    }
  });
}
