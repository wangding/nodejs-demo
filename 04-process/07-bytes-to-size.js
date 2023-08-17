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

mem('内存占用情况：');

/*
const fs = require('fs');
fs.readFile('../09-stream/big.file', (err, data) =>{
  mem();
  fs.writeFile('./tmp.data', data, ()=>{
    console.log('ok');
  });
});
*/
