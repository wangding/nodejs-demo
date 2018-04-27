#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2] || __filename;

const fid = fs.openSync(file, 'r');

fs.writeSync(1, fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);
