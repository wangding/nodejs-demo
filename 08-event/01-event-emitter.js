#!/usr/bin/env node

const { EventEmitter } = require('events'),
      log          = console.log,
      e            = new EventEmitter();

setInterval(() => {
  e.emit('hello');
}, 1000);

setTimeout(() => {
  e.emit('bye');
}, 5000);

e.on('hello', () => {
  log('hello world!');
});

e.on('bye', () => {
  log('goodbye!');
  process.exit();
});
