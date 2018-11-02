#!/usr/bin/node

const http = require('http'),
      qs   = require('querystring');

var items = [];

http.createServer((req, res) => {
  if(req.url != '/') {
    err(res);
    return;
  }

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

function show(res) {
  var html = '<!DOCTYPE html>\n'
            + '<html>\n'
            + '  <head>\n'
            + '    <meta charset="UTF-8">\n'
            + '    <title>Todo list</title>\n'
            + '  </head>\n'
            + '  <body>\n'
            + '    <h1>Todo List</h1>\n'
            + '    <ul>\n'
            + items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n')
            + '    </ul>\n'
            + '    <form method="post" action="/">\n'
            + '       <p><input type="text" name="item" />'
            + '       <input type="submit" value="Add Item" /></p>\n'
            + '    </form>\n'
            + '  </body>\n'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function add(req, res) {
  var body = '';

  req.on('data', function(chunk) { body += chunk; });
  req.on('end', function() {
    console.log(body);
    
    if(body != '') {
      items.push(qs.parse(body).item);
    }

    show(res);
  });
}

function err(res) {
  var msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}
