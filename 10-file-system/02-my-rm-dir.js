#!/usr/bin/node

const fs  = require('fs'),
      dir = process.argv[2];

if(fs.existsSync(dir)) {
  if(fs.statSync(dir).isDirectory())  fs.rmdirSync(dir);
} else {
  console.error('%s not exist!', dir);
  process.exit(1);
}
