const TodoList = require('../models/todo-list');
var express = require('express');
var router = express.Router();

var todo = new TodoList();

router.get('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset="utf-8"');
  todo.getAll((err, items) => {
    if(err) {
      console.error(err);
      return;
    }
    res.status(200).json(items);
  });
});

router.post('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body !== '') {
    todo.addItem(req.body.item, (err) => {
      if(err) {
        console.error(err);
        res.status(500).send('DB error!');
      } else {
        res.status(200).send('OK!');
      }
    });
  }
});

router.delete('/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined') {
    todo.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
      } else {
        res.status(200).send('Delete OK!');
      }
    });
  } else {
    todo.delete(Number(req.query.id), (err) => {
      if(err) {
        res.status(500).send('DB error!');
      } else {
        res.status(200).send('Delete OK!');
      }
    });
  }
});

router.put('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(typeof req.query.id === 'undefined') {
    res.status(404).send('Not found!');
  } else {
    todo.update(Number(req.query.id), req.body.item, (err) => {
      if(err) {
        res.status(500).send('DB error!');
      } else {
        res.status(200).send('Update OK!');
      }
    });
  }
});

module.exports = router;
