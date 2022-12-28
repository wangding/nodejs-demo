#!/usr/bin/env node

const assert = require('assert');

assert.equal(1, 1, 'MSG:5');
assert.equal(true, true, 'MSG:6');
assert.equal('abc', 'abc', 'MSG:7');

// assert.equal(0, 1, 'MSG:9');
// assert.equal(false, true, 'MSG:10');

/*
 * 下面的代码是反向断言
 */

assert.notEqual(0, 1, 'MSG:17');
assert.notEqual(false, true, 'MSG:18');
assert.notEqual('abc', 'def', 'MSG:19');

// assert.notEqual(0, 0, 'MSG:21');
// assert.notEqual(false, false, 'MSG:22');

/*
 * deepEqual
 */

const a = {a: {b: 1}};
const b = {a: {b: 1}};
const c = a;

assert.equal(a, c);
assert.deepEqual(a, b);
// assert.equal(a, b, 'MSG:32');

// a, b 两个对象的地址不同，equal 比较的是地址
// 如果要比较两个对象的内容，需要用 deepEqual
