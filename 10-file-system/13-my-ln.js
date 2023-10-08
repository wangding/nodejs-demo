#!/usr/bin/env node

const fs  = require('fs'),
      err = console.error;

let opt = {
  '4': createHardLink,
  '5': createSoftLink
};

function createSoftLink() {
  let opt = process.argv[2],
      src = process.argv[3],
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
}

function createHardLink() {
  let src = process.argv[2],
      lnk = process.argv[3];

  try {
    fs.linkSync(src, lnk);
  } catch(e) {
    err(e.message);
    process.exit(1);
  }
}

try {
  opt[process.argv.length]();
} catch(e) {
  err('命令行参数不正确！');
  process.exit(3);
}
