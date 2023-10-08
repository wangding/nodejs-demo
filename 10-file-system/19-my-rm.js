#!/usr/bin/env node

const fs   = require('fs'),
      join = require('path').join,
      src  = process.argv[2];

if(typeof(src) === 'undefined') {
  console.error('请指定要删除的文件名或者目录名！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exists!', src);
  process.exit(2);
}

function deleteDir(folder) {
  let files = fs.readdirSync(folder);

  for(let i=0; i<files.length; i++) {
    const file = join(folder, files[i]);
    fs.statSync(file).isDirectory() ? deleteDir(file) : fs.unlinkSync(file);
  }

  fs.rmdirSync(folder);
}

if(fs.statSync(src).isFile())      fs.unlinkSync(src);
if(fs.statSync(src).isDirectory()) deleteDir(src);
