const db = require('./database');

var TodoList = function() {};

TodoList.prototype.getAll = function(callback) {
  const sql = 'SELECT * FROM todo';
  var items = [];

  db.query(sql, function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    
    results.forEach((e) => { items.push(e.item); });

    callback(false, items);
  });
};

TodoList.prototype.addItem = function(item, callback) {
  const sql = 'INSERT INTO todo(item) VALUES(?)';

  db.query(sql, [item], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};

module.exports = TodoList;
