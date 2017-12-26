#!/usr/bin/node

var fs = require('fs');

var src = process.argv[2];

if(fs.statSync(src).isFile())  fs.unlinkSync(src);
