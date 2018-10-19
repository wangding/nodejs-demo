#!/usr/bin/node

const fs   = require('fs'),
      tar  = require('tar'),
      src  = process.argv[2],
      dst  = src + '.tgz';

if(process.argv.length !== 3) {
  console.error('命令行参数错误！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exist!', src);
  process.exit(2);
}

var files = [];
files.push(src);

tar.create({gzip: true}, files).pipe(fs.createWriteStream(dst));
