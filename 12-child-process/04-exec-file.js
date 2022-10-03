#!/usr/bin/env node

const {execFile} = require('child_process');

console.log('father PID:', process.pid);

execFile('./03-child.js', (err, stdout) => {
  console.log(stdout);
});
