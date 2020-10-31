#!/usr/bin/env node

const http = require('http'),
      url  = require('url'),
      qs   = require('querystring'),
      log  = console.log;

let items = [];

http.createServer((req, res) => {
  let path = url.parse(req.url).pathname;

  if(path != '/') {
    err(res);
    return;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  add(req, res);
}).listen(8080);

function show(res) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Todo list</title>
    </head>
    <body>
      <h1>Todo List</h1>
      <form method="get" action="/">
        <p><input type="text" name="item" />
        <input type="submit" value="Add Item" /></p>
      </form>
      <ul>
        ${items.map(item => '<li>' + item + '</li>').join('\n')}
      </ul>
    </body>
    </html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function add(req, res) {
  const value = qs.parse(url.parse(req.url).query).item;

  if(typeof value !== 'undefined' && value !== '') items.push(value);

  log(items);
  show(res);
}

function err(res) {
  const msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}
