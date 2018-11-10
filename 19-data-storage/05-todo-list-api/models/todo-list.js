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

TodoList.prototype.update = function(id, item, callback) {
  const sql = 'UPDATE todo SET item = ? WHERE id = ?';

  db.query(sql, [item, id], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};

TodoList.prototype.delete = function(id, callback) {
  const sql = 'DELETE from todo WHERE id = ?';

  db.query(sql, [id], function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
};

TodoList.prototype.delAll = function(callback) {
  const sql = 'DELETE from todo';

  db.query(sql, function(err, results) {
    if (err) {
      callback(true);
      return;
    }
    callback(false, results);
  });
}; 
module.exports = TodoList;
