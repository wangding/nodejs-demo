#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

const child = cp.spawn('./02-child.js');

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
