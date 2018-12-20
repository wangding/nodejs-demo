#!/usr/bin/env node

function Todo() {
  this.todos = [];
}

Todo.prototype.add = function(item) {
  if(!item) throw new Error('Todo#add require an item');
  this.todos.push(item);
};

Todo.prototype.deleteAll = function() {
  this.todos = [];
};

Todo.prototype.getCount = function() {
  return this.todos.length;
};

Todo.prototype.doAsync = function(cb) {
  setTimeout(cb, 2000, true);
};

module.exports = Todo;
