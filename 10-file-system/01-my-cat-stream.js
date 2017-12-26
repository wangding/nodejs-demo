#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2] || __filename;

fs.createReadStream(file).pipe(process.stdout);
