#!/usr/bin/node

var fs = require('fs');

var mod = process.argv[2];
var src = process.argv[3];

fs.chmodSync(src, mod);
