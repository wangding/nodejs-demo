#!/usr/bin/env node

console.log('PID:', process.pid);

const {spawn} = require('child_process'),
      cp = spawn('cat', ['02-spawn-v1.js']);

cp.stdout.pipe(process.stdout);
cp.stderr.pipe(process.stderr);
