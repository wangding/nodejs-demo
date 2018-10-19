#!/usr/bin/node

const fs   = require('fs'),
      tar  = require('tar'),
      src  = process.argv[2];

if(process.argv.length !== 3) {
  console.error('命令行参数错误！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exist!', src);
  process.exit(2);
}

fs.createReadStream(src).pipe(tar.x());
