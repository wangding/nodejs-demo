#!/usr/bin/env node

// run: node --expose-gc this.js
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

function main() {
  /* global WeakMap:true */
  global.gc();
  mem('1) 开始...');

  const vm = new WeakMap();
  let b  = new Object();

  global.gc();
  mem('\n2) 空的 WeakMap vm 和空的 Object b...');

  vm.set(b, new Array(5*1024*1024));

  global.gc();
  mem('\n3) 有 5×10^6 个数组元素的 WeakMap vm...');

  b=null;

  setTimeout(()=>{
    global.gc();
    mem('\n4) b=null 后...');
  }, 1000);
}

main();
