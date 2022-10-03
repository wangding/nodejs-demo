#!/usr/bin/env node

console.log('father PID:', process.pid);

const {spawn} = require('child_process'),
      cp = spawn('./03-child.js');

cp.stdout.pipe(process.stdout);
cp.stderr.pipe(process.stderr);
