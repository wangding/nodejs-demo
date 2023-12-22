#!/usr/bin/env node

const log = console.log;

const fs = require('fs');

function printTree(dir, prefix = '', last = true) {
  const files = fs.readdirSync(dir);

  let dirName = dir.split('/');
  dirName = dirName[dirName.length-1];
  log(`${prefix}${last ? '└──' : '├──'} ${dirName}`);

  // 子目录的前缀
  const subfix = `${prefix}${last ? '    ' : '│   '}`;

  files.forEach((file, index) => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);

    // 判断是否为文件夹
    if (stat.isDirectory()) {
      const isLast = index === files.length - 1;
      printTree(filePath, subfix, isLast);
    } else {
      log(`${subfix}${index === files.length - 1 ? '└──' : '├──'} ${file}`);
    }
  });
}

printTree(process.cwd());
