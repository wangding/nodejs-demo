#!/usr/bin/node

const zlib = require('zlib'),
      fs   = require('fs'),
      src  = process.argv[2];

if(process.argv.length !== 3) {
  console.error('命令行参数错误！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exist!', src);
  process.exit(2);
}

const dst = src.slice(0, src.length - 3);

fs.createReadStream(src).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(dst));
