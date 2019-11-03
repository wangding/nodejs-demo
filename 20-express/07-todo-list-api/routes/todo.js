var express = require('express');
var router = express.Router();

var items = [];

router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  res.status(200).json(items);
});

router.post('/', function(req, res) {
  items.push(req.body.item);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).send('OK!');
});

router.delete('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined') {
    items = [];
    res.status(200).send('Delete OK!');
  } else if(Number(req.query.id) >=0 && Number(req.query.id) < items.length) {
    items.splice(Number(req.query.id), 1);
    res.status(200).send('Delete OK!');
  } else {
    res.status(404).send('Not found!');
  }
});

router.put('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined') {
    res.status(404).send('Not found!');
  } else if(Number(req.query.id) >=0 && Number(req.query.id) < items.length) {
    items[Number(req.query.id)] = req.body.item;
    res.status(200).send('Update OK!');
  } else {
    res.status(404).send('Not found!');
  }
});

module.exports = router;
