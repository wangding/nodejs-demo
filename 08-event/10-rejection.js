#!/usr/bin/env node

/* global Symbol: true */

const {EventEmitter} = require('events');

//const ee = new EventEmitter();
const ee = new EventEmitter({ captureRejections: true  });

ee.on('something', async ()=>{
  throw new Error('Something wrong!');
});

/* 可以捕获异常 
ee.on('error', (err)=>{
  console.log(err.message);
});
*/

// 不能捕获异常
ee[Symbol.for('nodejs.rejection')] = console.log;

ee.emit('something');
