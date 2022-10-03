#!/usr/bin/env node

const {fork} = require('child_process');

console.log('I am father process. PID:', process.pid);

fork('./03-child.js');

setTimeout(() => {
  console.log('5 seconds passed. father exit');
}, 5000);
