#!/usr/bin/env node

const http = require('http'),
      log  = console.log;

function select(req, res) { res.end(req.method); }
const insert = update = remove = select;

http.createServer((req, res) => {
  log('HTTP request method:', req.method);

  switch(req.method) {
    case 'GET':
      select(req, res);
      break;

    case 'POST':
      insert(req, res);
      break;

    case 'PUT':
      update(req, res);
      break;

    case 'DELETE':
      remove(req, res);
      break;

    default:
      res.end('Something Wrong!');
  }
}).listen(8080);
