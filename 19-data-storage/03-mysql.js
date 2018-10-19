#!/usr/bin/node

const mysql = require('mysql'),
      con   = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ddd',
        database: 'test'
      });

con.connect();

/*/ 增
con.query('insert into books(book_id, title, status) values(?, ?, ?)',
    ['103', 'wangding', 0], (err, result) => {
      if(err) {
        console.error(err.message);
        process.exit(1);
      }

      console.log(result);
    });

// 改
con.query('update books set title = ? where book_id = ?', 
    ['hello world', 103], (err, result) => {
      if(err) {
        console.error(err.message);
        process.exit(1);
      }

      console.log(result);
    });
*/
// 删
con.query('delete from books where book_id = ?', [103], (err, result) => {
  if(err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(result);
});
//*/
// 查询
con.query('select * from books', (err, result) => {
  if(err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(result);
});


con.end();

