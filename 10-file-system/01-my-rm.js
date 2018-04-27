#!/usr/bin/node

const fs  = require('fs'),
      src = process.argv[2];

if(fs.existsSync(src)) {
  if(fs.statSync(src).isFile())  fs.unlinkSync(src);
} else {
  console.error('%s not exist!', src);
  process.exit(1);
}
