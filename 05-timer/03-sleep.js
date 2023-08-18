#!/usr/bin/env node

// cmd: echo hello; sleep 2; echo world

/* global Promise:true */
const log = console.log;
const { setTimeout:delay } = require('timers/promises');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function fn() {
  log('hello');
  await sleep(2000);
  log('world\n');

  log('wang');
  await delay(2000);
  log('ding\n');
}

log('abc');
setTimeout(() => {
  log('def\n');
  fn();
}, 2000);
