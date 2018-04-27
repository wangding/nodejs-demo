#!/usr/bin/node

const fs   = require('fs'),
      uid  = process.argv[2],
      gid  = process.argv[3],
      file = process.argv[4];

if(process.argv.length !== 5) {
  console.error('命令行参数不正确！');
  process.exit(1);
}

try{
  fs.chownSync(file, Number(uid), Number(gid));
} catch(err) {
  console.error(err.message);
  process.exit(2);
}
