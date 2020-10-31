#!/usr/bin/env node

const fs   = require('fs'),
      join = require('path').join,
      src  = process.argv[2];

if(typeof(src) === 'undefined') {
  console.error('请指定要删除的文件名或者目录名！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exist!', src);
  process.exit(2);
}

if(fs.statSync(src).isFile())  fs.unlinkSync(src);

if(fs.statSync(src).isDirectory()) deleteDir(src);

function deleteDir(folder) {
  let files = fs.readdirSync(folder);

  for(let i=0; i<files.length; i++) {
    let file = join(folder, files[i]);

    if(fs.statSync(file).isFile()) {
      fs.unlinkSync(file);
      continue;
    }

    if(fs.statSync(file).isDirectory()) deleteDir(file);
  }

  fs.rmdirSync(folder);
}
