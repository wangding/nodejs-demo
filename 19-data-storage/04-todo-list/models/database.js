let mysql = require('mysql');
let config = require('./config.json');

let pool = mysql.createPool(config);

module.exports = pool;
