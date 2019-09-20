#!/usr/bin/node

const fs  = require('fs'),
      err = console.error,
      src = process.argv[2],
      dst = process.argv[3];

if(!fs.existsSync(src)) {
  err('%s not exist!', src);
  process.exit(1);
}
  
if(!fs.statSync(src).isFile()) {
  err('%s is not file!', src);
  process.exit(2);
}

if(typeof dst === 'undefined') {
  err('dst is undefined');
  process.exit(3);
}

// 复制文件内容
var stm = fs.createReadStream(src).pipe(fs.createWriteStream(dst));

// 复制文件权限
stm.on('close', () => {
  fs.chmodSync(dst, fs.statSync(src).mode);
});
