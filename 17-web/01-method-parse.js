#!/usr/bin/node

const http = require('http');

http.createServer((req, res) => {
  console.log('HTTP request method:', req.method);

  switch(req.method) {
    case 'GET':
      select(req, res);
      break;

    case 'POST':
      create(req, res);
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

function select(req, res) {
  send(res);
}

function create(req, res) {
  send(res);
}

function update(req, res) {
  send(res);
}

function remove(req, res) {
  send(res);
}

function send(res) {
  res.end('OK!');
}
