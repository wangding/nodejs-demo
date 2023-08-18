#!/usr/bin/env node

if(process.argv.length !== 3) {
  console.error('usage：cmd base64_string');
  process.exit(1);
}

// method A
const buf = atob(process.argv[2]);
const info = buf.split(':');

// method B
/*
const buf = Buffer.from(process.argv[2], 'base64');
const info = buf.toString('utf8').split(':');
*/

if(info.length !== 2) {
  console.error('信息有误！');
  process.exit(2);
}

console.log('user name: %s\npassword: %s', info[0], info[1]);
