#!/usr/bin/env node

const {fork} = require('child_process');

console.log('father PID:', process.pid);

const son = fork('./11-ipc-child.js'),
      dau = fork('./11-ipc-child.js');

son.on('message', (data) => {
  console.log('I have son:', data);
});

dau.on('message', (data) => {
  console.log('I have daughter:', data);
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
