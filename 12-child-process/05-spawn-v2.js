#!/usr/bin/env node

console.log('I am father process. PID:', process.pid);

const cp = require('child_process'),
      child = cp.spawn('./03-child.js');

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
