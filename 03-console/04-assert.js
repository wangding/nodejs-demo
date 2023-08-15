#!/usr/bin/env node

const log = console.log;

console.clear();
console.assert(true);
log('hello');

// 断言失败不中断程序的执行
console.assert(false, 'Something wrong!');

log('world');
