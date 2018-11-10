const TodoList = require('../models/todo-list.js');
var express = require('express');
var router = express.Router();

var todo = new TodoList();

router.get('/', function(req, res/*, next*/) {
  todo.getAll((err, items) => {
    if(err) {
      console.error(err);
      return;
    }
    res.render('index', {items: items});
  });
});

router.post('/', function(req, res){
  if(req.body.item !== '') {
    todo.addItem(req.body.item, function(err){
      if(err) console.error(err);
    });
  }

  todo.getAll((err, items) => {
    if(err) {
      console.error(err);
      return;
    }
    res.render('index', {items: items});
  });
});

module.exports = router;

