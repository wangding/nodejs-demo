const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
  console.log(Date.now());
  next();
});

router.get('/', function(req, res) {
  res.end('books');
});

router.get('/list', function(req, res) {
  res.end('books-list');
});

module.exports = router;
