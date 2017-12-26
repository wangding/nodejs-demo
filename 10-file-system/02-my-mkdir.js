#!/usr/bin/node

var fs = require('fs');

var dir = process.argv[2];

fs.mkdirSync(dir);
