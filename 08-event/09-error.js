#!/usr/bin/env node

const {EventEmitter, errorMonitor} = require('events'),
      log = console.log;

const ee = new EventEmitter();

/*
ee.on('error', (err)=>{ // 捕获异常，正常退出
  log(err.message);
});
*/

ee.on(errorMonitor, (err)=>{ // 捕获异常，异常退出
  log(err.message);
});

ee.emit('error', new Error('Something wrong!'));

/*
try {
  throw new Error('Something wrong!');
} catch(e) {
  log(e.message);
}*/
