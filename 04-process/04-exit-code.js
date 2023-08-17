#!/usr/bin/env node

/*
// main 函数返回值，不能作为程序退出码
function main() {
  const exitCode = process.argv[2];
  console.log(`exit code: ${exitCode}`);
  return exitCode;
}

main();
*/

const log = console.log,
      num = Number(process.argv[2] ?? 0);

if(isNaN(num)) {
  log('命令行参数不是合法数字！');
  process.exit(1);
}

log('退出码:', num);
process.exit(num);
