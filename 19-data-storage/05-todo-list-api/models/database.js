var mysql = require('mysql');
var config = require('./config.json');

var pool = mysql.createPool(config);

module.exports = pool;
