#!/usr/bin/env node

console.log('child PID:', process.pid);

process.on('message', (msg) => {
  console.log('father say:', msg);
});

process.send(process.pid);
