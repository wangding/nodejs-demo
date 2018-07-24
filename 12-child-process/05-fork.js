#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

cp.fork('./02-child.js');
//cp.fork('cat', ['02-child.js']);

setTimeout(() => {
  console.log('5 seconds passed. father Game Over!');
}, 5000);
