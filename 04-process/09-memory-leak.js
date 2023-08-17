#!/usr/bin/env node

function bytesToSize(num) {
  const { floor, log, pow } = Math;
  const unit = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = floor(log(num) / log(1024));
  return `${(num / pow(1024, i)).toFixed(2)} ${unit[i]}`;
}

function mem(message) {
  const m = process.memoryUsage();
  for(const key in m) m[key] = bytesToSize(m[key]);

  console.log(message);
  console.log(m);
}

/* 演示内存泄漏 */
let arr = [];
function leak(shouldLeak=true) {
  for(let i=0; i<10000; i++) arr.push(i);

  mem(`arr.length: ${arr.length}`);
  if(!shouldLeak) arr.length = 0; // or arr = []
  setTimeout(() => leak(shouldLeak), 1000);
}

leak(
//  false
);
