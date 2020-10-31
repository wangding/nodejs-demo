#!/usr/bin/env node

console.time('TEST');
longTask();
console.timeEnd('TEST');

function longTask() {
  let n;

  for(let i=0; i<10000; i++) {
    for(let j=0; j<10000; j++) {
      n = i * j;
    }
  }

  return n;
}
