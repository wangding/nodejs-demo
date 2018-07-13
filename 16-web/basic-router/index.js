const express = require('express');
const app = express();

function c1(req, res, next) {
  console.log('c1');
  next();
}

function c2(req, res, next) {
  console.log('c2');
  next();
}

app.get('/', [c1, c2], function(req, res, next) {
  console.log('c3');
  next();
}, function(req, res) {
  console.log('c4');
  res.end('ok!');
});

app.get('/json', function(req, res) {
  res.json({name: 'wangding', age: 41});
  res.end();
});

app.get('/download', function(req, res) {
  res.download('package.json');
});

app.listen(8080);
