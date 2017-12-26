#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.fork('02-child.js');

setTimeout(function() {
  console.log('5 seconds passed. father Game Over!');
}, 5000);
