#!/usr/bin/env node

console.log('I am child process. PID:', process.pid);

process.on('message', (msg) => {
  console.log('Father say:', msg);
});

process.send(process.pid);
