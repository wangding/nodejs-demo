#!/usr/bin/env node

/* 递归打印目录下的子目录或文件的硬链接数和 inode 值 */

const fs   = require('fs'),
      log  = console.log,
      join = require('path').join,
      src  = process.argv[2] ?? 'root';

function main() {
  const res = validate();

  if(res.code !== 0) {
    console.error(res.msg);
    process.exit(res.code);
  }

  logInode(src);
  log('---');
  lsInode(src);
}

main();

function lsInode(folder) {
  let files = fs.readdirSync(folder);

  logInode(`${folder}/.`);
  logInode(`${folder}/..`);
  for(let i=0; i<files.length; i++) {
    let file = join(folder, files[i]);
    logInode(file);
  }
  log();

  for(let i=0; i<files.length; i++) {
    let file = join(folder, files[i]);
    if(fs.statSync(file).isDirectory()) {
      logInode(file);
      lsInode(file);
    }
  }
}

function logInode(folder) {
  let last = folder.split('/').pop();
  let dir  = '',
      space = ' '.repeat(20);

  if(last === '.') {
    folder = folder.slice(0, folder.length-1);
    space  = space.slice(0, 20-1);
    dir    = '.';
  } else if(last === '..') {
    folder = join(folder.slice(0, folder.length-2), '..');
    space  = space.slice(0, 20-2);
    dir    = '..';
  } else {
    space = space.slice(0, 20-folder.length);
    dir   = folder;
  }

  log(`${dir} ${space} lnk: ${fs.statSync(folder).nlink} \t inode: ${fs.statSync(folder).ino}`);
}

function validate() {
  let res = {
    code: 0,
    msg: 'ok'
  };

  if(typeof(src) === 'undefined') {
    res.code = 1;
    res.msg  = 'dir is undefined';
  } else if(!fs.existsSync(src)) {
    res.code = 2;
    res.msg  = `${src} not exist!`;
  } else if(fs.statSync(src).isFile()) {
    res.code = 3;
    res.msg  = `${src} is not directory!`;
  } else {
    // ok
  }

  return res;
}
