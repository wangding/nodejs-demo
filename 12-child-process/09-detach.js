#!/usr/bin/env node

const {spawn} = require('child_process');

console.log('father PID:', process.pid);

const cp = spawn('./03-child.js', [], {detached: true, stdio: ['ignore', 1, 2]});

cp.unref();

setTimeout(() => {
  console.log('father exit');
  process.exit();
}, 5000);
