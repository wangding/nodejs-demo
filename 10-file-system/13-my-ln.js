#!/usr/bin/node

const fs  = require('fs'),
      err = console.error;

var opt, src, lnk;

switch(process.argv.length) {
  case 4:
    src = process.argv[2];
    lnk = process.argv[3];

    try {
      fs.linkSync(src, lnk);
    } catch(e) {
      err(e.message);
      process.exit(1);
    }
    break;

  case 5:
    opt = process.argv[2];
    src = process.argv[3];
    lnk = process.argv[4];

    if(opt === '-s') {
      try {
        fs.symlinkSync(src, lnk);
      } catch(e) {
        err(e.message);
        process.exit(2);
      }
    } else {
      err('命令行参数不正确！');
    }
    break;

  default:
    err('命令行参数不正确！');
}
