#!/usr/bin/node

var fs = require('fs');

var src = process.argv[2];

console.log(fs.statSync(src));
