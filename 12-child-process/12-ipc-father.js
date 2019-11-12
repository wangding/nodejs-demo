#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.fork('./11-ipc-child.js');

child.on('message', (msg) => {
  console.log('Child:', msg);
});

setTimeout(() => {
  child.send('I am father process. PID: ' + process.pid);
}, 2000);

setTimeout(() => {
  child.send('I will kill you, son! 2 seconds later.');
}, 4000);

setTimeout(() => {
  child.kill('SIGINT');
  process.exit();
}, 6000);
