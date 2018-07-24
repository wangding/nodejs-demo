#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

cp.execFile('./02-child.js', (err, stdout) => {
  console.log(stdout);
});
