#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2] || __filename;

var len = fs.statSync(file).size;
var buf = new Buffer(len);

var fid = fs.openSync(file, 'r');

fs.readSync(fid, buf, 0, len, 0);

console.log(buf.toString('utf8'));

fs.closeSync(fid);
