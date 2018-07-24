#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;
var e = new EventEmitter();

setInterval(() => {
  e.emit('hello');
}, 1000);

setTimeout(() => {
  e.emit('bye');
}, 5000);

e.on('hello', () => {
  console.log('hello world!');
});

e.on('bye', () => {
  console.log('goodbye!');
  process.exit();
});

