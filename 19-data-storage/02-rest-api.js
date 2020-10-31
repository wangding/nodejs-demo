#!/usr/bin/env node

let http = require('http'),
    fs = require('fs'),
    items = loadData();

http.createServer((req, res) => {
  console.log(req.headers);
  console.log('');

  switch(req.method) {
    case 'GET':
      get(res);
      break;

    case 'POST':
      insert(req, res);
      break;

    case 'DELETE':
      del(req, res);
      break;

    case 'PUT':
      change(req, res);
      break;

    default:
      break;
  }
}).listen(8080);

function get(res) {
  let body = JSON.stringify(items);

  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(body);
}

function insert(req, res) {
  let item = '';

  req.on('data', (data) => { item += data; });
  req.on('end', () => {
    items.push(item);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Insert OK!');
  });
}

function del(req, res) {
  let arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  let i = parseInt(arg[1]);

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!items[i]) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    items.splice(i, 1);
    res.end('Delete OK');
  }
}

function change(req, res) {
  let arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  let item = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (chunk) => { item += chunk; });
  req.on('end', () => {
    let i = parseInt(arg[1]);

    if(!items[i]) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      items[i] = item;
      res.end('Change OK');
    }
  });
}

function loadData() {
  try {
    let data = fs.readFileSync('./data.txt', 'utf8');
    console.log(data);
    return JSON.parse(data);
  } catch(e) { return []; }
}

process.on('SIGINT', () => {
  fs.writeFileSync('./data.txt', JSON.stringify(items));
  process.exit();
});
