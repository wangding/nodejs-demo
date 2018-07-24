#!/usr/bin/node

const cp = require('child_process');

cp.spawnSync('./02-child.js', [], {stdio: ['ignore', 1, 2]});

console.log('I am father process. PID:', process.pid);
