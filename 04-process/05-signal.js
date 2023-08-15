#!/usr/bin/env node

const log = console.log;

log('PID:', process.pid);

process.stdin.resume();

process.on('SIGINT', () => {
  log('You have pressed Ctrl + C. Good bye!');
  process.exit();
});

process.on('SIGTSTP', () => {
  log('You have pressed Ctrl + Z.');
});

const os = require('os');

console.log(os.constants.signals);
