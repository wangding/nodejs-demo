#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

let items = [];

http.createServer((req, res) => {
  if(req.url != '/') {
    err(res);
    return;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log('');

  switch(req.method) {
    case 'GET':
      show(res);
      break;

    case 'POST':
      operate(req, res);
      break;

    default:
      err(res);
      break;
  }
}).listen(8080);

function show(res) {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Todo list</title>
      </head>
      <body>
        <h1>Todo List</h1>
        <form method="post" action="/">
          <p><input type="text" name="item" />
          <input type="submit" value="Add Item" /></p>
        </form>
        <ul>
          ${items.map(item => '<li>' + item + '</li>').join('')}
        </ul>
      </body>
    </html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function operate(req, res) {
  let data = '';

  req.on('data', chunk => data += chunk);
  req.on('end', () => {
    log(data);

    const item = new URLSearchParams(data).get('item');
    if(item !== '' && item !== null) items.push(item);

    show(res);
  });
}

function err(res) {
  const msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}
