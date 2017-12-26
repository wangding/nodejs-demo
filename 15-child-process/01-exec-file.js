#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. PID:', process.pid);
console.log('cat 01-exec-file.js\n');

cp.execFile('xyz', ['01-exec-file.js'], function(err, stdout, stderr) {
  if(err) console.error(err);

  console.log(stdout);
});
