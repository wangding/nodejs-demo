#!/usr/bin/env node

const assert = require('assert');

const tracker = new assert.CallTracker();

function func() {
  console.log('func executed');
}

// callfunc() 必须在 tracker.verify() 之前恰好被调用 1 次。
const callsfunc = tracker.calls(func, 1);

callsfunc();

// 调用 tracker.verify() 并验证是否所有 tracker.calls() 函数都已被准确调用。
process.on('exit', () => {
  console.log('bye');
  tracker.verify();
});
