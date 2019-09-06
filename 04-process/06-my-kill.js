#!/usr/bin/node

const sig = process.argv[2],
      pid = process.argv[3],
      err = console.error;

if(process.argv.length < 4) {
  err('命令行参数少于两个！');
  process.exit(1);
}

if(process.argv.length > 4) {
  err('命令行参数多于两个！');
  process.exit(2);
}

if(isNaN(Number(pid))){
  err('pid 应该是数值');
  process.exit(3);
}

process.kill(pid, sig);
