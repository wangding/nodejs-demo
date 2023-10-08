#!/usr/bin/env node

const fs   = require('fs'),
      err  = console.error,
      uid  = Number(process.argv[2]),
      gid  = Number(process.argv[3]),
      file = process.argv[4];

if(process.argv.length !== 5) {
  err('命令行参数不正确！');
  process.exit(1);
}

try{
  fs.chownSync(file, uid, gid);
} catch(e) {
  err(e.message);
  process.exit(2);
}
