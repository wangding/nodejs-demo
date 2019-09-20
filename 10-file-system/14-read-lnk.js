#!/usr/bin/node

const fs  = require('fs'),
      err = console.error,
      src = process.argv[2];

if(typeof(src) === 'undefined' || process.argv.length !== 3) {
  err('命令行参数不正确!');
  process.exit(1);
}

try{
  console.log(src, '->', fs.readlinkSync(src));
} catch(err) {
  err(err.message);
  process.exit(2);
}
