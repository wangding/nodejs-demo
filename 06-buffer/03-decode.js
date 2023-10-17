#!/usr/bin/env node

if(process.argv.length !== 3) {
  console.error('usage：cmd base64_string');
  process.exit(1);
}

// method A
const buf = atob(process.argv[2]);
const [userName, pwd] = buf.split(':');

// method B
/*
const buf = Buffer.from(process.argv[2], 'base64');
const [userName, pwd] = buf.toString('utf8').split(':');
*/

console.log(`userName: ${userName}\npassword: ${pwd}`);
