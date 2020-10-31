#!/usr/bin/env node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

let son = cp.fork('./11-ipc-child.js'),
    dau = cp.fork('./11-ipc-child.js');

son.on('message', (data) => {
  console.log('I have baby:', data);
});

dau.on('message', (data) => {
  console.log('I have baby:', data);
});

setTimeout(() => {
  son.send('good good study');
}, 2000);

setTimeout(() => {
  dau.send('day day up');
}, 4000);

setTimeout(() => {
  son.kill('SIGINT');
  dau.kill('SIGINT');
  process.exit();
}, 6000);
