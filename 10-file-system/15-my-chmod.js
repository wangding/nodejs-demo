#!/usr/bin/node

const fs  = require('fs'),
      err = console.error,
      mod = process.argv[2],
      src = process.argv[3];

if(process.argv.length != 4) {
  err('命令行参数不正确！');
  process.exit(1);
}

try{
  fs.chmodSync(src, parseInt(mod, 8));
} catch(e) {
  err(e.message);
  process.exit(2);
}
