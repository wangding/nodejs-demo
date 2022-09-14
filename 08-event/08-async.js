#!/usr/bin/env node

const {EventEmitter} = require('events'),
      log            = console.log;

class MyClass extends EventEmitter {}

const mc = new MyClass();

mc.on('hello', (a)=>{
  log('1:', a);  // 同步
  //setImmediate(()=>log('1:', a));  // 异步
});

mc.on('hello', (a)=>{
  log('2:', a);
});

mc.emit('hello', 100);
