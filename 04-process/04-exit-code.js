#!/usr/bin/node

const log = console.log,
      err = console.error,
      arg = process.argv[2];

if(typeof(arg) === 'undefined') {
  err('缺少命令行参数！');
  process.exit(1);
}

if(isNaN(Number(arg))) {
  err('命令行参数不是合法数字！');
  process.exit(2);
}

log('退出码:', arg);
process.exit(arg);
