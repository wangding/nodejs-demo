#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.spawn('./03-child.js', [], {detached: true, stdio: ['ignore', 1, 2]});

child.unref();

setTimeout(() => {
  console.log('5 seconds passed. Father game over!');
  process.exit(0);
}, 5000);
