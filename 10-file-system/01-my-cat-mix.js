#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2] || __filename;

var fid = fs.openSync(file, 'r');

fs.writeSync(1, fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);
