#!/usr/bin/node

const fs  = require('fs'),
      dir = process.argv[2];

if(typeof(dir) === 'undefined') {
  console.error('没有指定要创建的目录名称！');
  process.exit(1);
}

fs.mkdirSync(dir);
