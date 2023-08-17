#!/usr/bin/env node

const mysql = require('mysql2/promise'),
      log   = console.table;

let db = {};

db.insert = async(con, areaName) => {
  const sql = `insert into areas(area_name) values('${areaName}')`;

  const [res] = await con.query(sql);
  log(res);
};

db.update = async(con, id, areaName) => {
  const sql = `update areas set area_name = '${areaName}' where id = ${id}`;

  const [res] = await con.query(sql);
  log(res);
};

db.del = async(con, id) => {
  const sql = `delete from areas where id = ${id}`;

  const [res] = await con.query(sql);
  log(res);
};

db.select = async(con) => {
  const sql = 'select * from areas order by id';

  const [rows] = await con.query(sql);
  log(rows);
};

async function main() {
  const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ddd',
    database: 'demo'
  });

  await db[process.argv[2]](con, process.argv[3], process.argv[4]);
  await con.end();
}

main();
