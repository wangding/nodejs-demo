#!/usr/bin/env node

const assert = require('assert');

assert.ok(1, 'MSG:5');
assert.ok(true, 'MSG:6');
assert.ok('abc', 'MSG:7');

// assert.ok(0, 'MSG:9');
// assert.ok(false, 'MSG:10');

/*
 * 下面的代码等价于上面，但是更简洁。
 * 去掉 9, 10, 19, 20 行的代码注释，会抛出异常。
 */

assert(1, 'MSG:17');
assert(true, 'MSG:18');
assert('abc', 'MSG:19');

// assert(0, 'MSG:21');
// assert(false, 'MSG:22');
