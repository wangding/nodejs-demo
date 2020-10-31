#!/usr/bin/env node

const mysql = require('mysql'),
      log   = console.log,
      con   = mysql.createConnection({
        host: '192.168.133.144',
        user: 'root',
        password: 'ddd',
        database: 'test'
      });

function insert() {
  const sql = 'insert into books(title, status) values(?, ?, ?)',
        data = ['wangding', 0];

  con.connect();
  con.query(sql, data, (err, result) => {
    log(result);
    con.end();
  });
}

function update() {
  const sql = 'update books set title = ? where book_id = ?',
        data= ['hello world', 103];

  con.connect();
  con.query(sql, data, (err, result) => {
    log(result);
    con.end();
  });
}

function del() {
  const sql = 'delete from books where status = ?';

  con.connect();
  con.query(sql, [1], (err, result) => {
    log(result);
    con.end();
  });
}

function select() {
  const sql = 'select * from books';

  con.connect();
  con.query(sql, (err, result) => {
    log('id\tstatus\ttitle');
    log('--------------------------------------');
    result.forEach((row) => {
      log(`${row.book_id}\t${row.status}\t${row.title}`);
    });
    log('--------------------------------------');
    con.end();
  });
}

/* -------------------------------- */

switch(process.argv[2]) {
  case 'insert':
    insert();
    break;

  case 'update':
    update();
    break;

  case 'delete':
    del();
    break;

  case 'select':
    select();
    break;

  default:
    log('app opt');
}
