const TodoList = require('../models/todo-list.js');

var todo = new TodoList();

todo.addItem('吃饭', function(err, results){
  console.log(err, results);
});
todo.addItem('睡觉', function(err, results){
  console.log(err, results);
});

todo.getAll(function (err, results) {
  if(err) {
    console.error('error');
    process.exit(100);
  }

  results.forEach(function(e){
    console.log(e.item);
  });
  process.exit();
});
