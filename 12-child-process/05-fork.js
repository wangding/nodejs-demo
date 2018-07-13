#!/usr/bin/node

console.log('I am father process. PID:', process.pid);

setTimeout(function() {
  console.log('5 seconds passed. father Game Over!');
}, 5000);
