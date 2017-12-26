#!/usr/bin/node

var fs = require('fs');

var dir = process.argv[2];

if(fs.statSync(dir).isDirectory())  fs.rmdirSync(dir);
