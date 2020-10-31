#!/usr/bin/env node

const http = require('http'),
      fs   = require('fs');

let items = [];

http.createServer((req, res) => {
  printRequest(req);

  if(req.url === '/' && req.method === 'GET') {
    showHomePage(res);
    return;
  }

  if(req.url === '/12-todo.js' && req.method === 'GET') {
    sendFile(res);
    return;
  }

  if(req.url !== '/todo' && !/^\/todo:(\d)+$/.test(req.url)) {
    showErrPage(res);
    return;
  }

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

function showHomePage(res) {
  let html = fs.readFileSync('./12-todo.html').toString('utf8');

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(html),
    'Cache-Control': 'public,max-age=600',
    'Access-Control-Allow-Origin': '*'
  });

  res.end(html);
}

function showErrPage(res) {
  let html = fs.readFileSync('./12-404.html').toString('utf8');

  res.writeHead(404, {
    'Content-Type': 'text/html',
    'Cache-Control': 'public,max-age=600',
    'Content-Length': Buffer.byteLength(html),
  });

  res.end(html);
}

function sendFile(res) {
  let data = fs.readFileSync('./12-todo.js').toString('utf8');

  res.writeHead(200, {
    'Content-Type': 'application/javascript',
    'Cache-Control': 'public,max-age=600',
    'Content-Length': Buffer.byteLength(data),
  });

  res.end(data);
}

function printRequest(req) {
  const log = console.log;

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  log(items);
}

// method: GET, url: /todo, fun: get all todo items
function select(res) {
  let body = JSON.stringify(items);

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain; charset="utf-8"',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(body);
}

// method: POST, url: /todo, fun: insert todo item
function insert(req, res) {
  let item = '';

  req.on('data', data => item += data);
  req.on('end', () => {
    items.push(item);
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Insert OK!');
  });
}

// method: DELETE, url: /todo,  fun: del all todo items
// method: DELETE, url: /todo:id, fun: del todo item by id 
function del(req, res) {
  if(req.url === '/todo') {  // del all
    items = [];
    res.end('Delete OK!');
    return;
  }

  let arg = req.url.split(':'),
      id  = parseInt(arg[1]);

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!items[id]) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    items.splice(id, 1);
    res.statusCode = 200;
    res.end('Delete OK');
  }
}

// method: PUT, url: /todo:id, fun: update todo item by id
function update(req, res) {
  let arg = req.url.split(':'),
      id  = parseInt(arg[1]),
      item = '';

  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', chunk => item += chunk);
  req.on('end', () => {
    if(!items[id]) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      items[id] = item;
      res.statusCode = 200;
      res.end('Update OK');
    }
  });
}
