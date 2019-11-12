#!/usr/bin/node

console.log('PID:', process.pid);

const cp    = require('child_process'),
      child = cp.spawn('cat', ['02-spawn-v1.js']);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
