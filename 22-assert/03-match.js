#!/usr/bin/env node

const assert = require('assert');

// assert.match('I will fail', /pass/, 'MSG:5');
// assert.match(123, /pass/, 'MSG:6');
assert.match('I will pass', /pass/, 'MSG:7');

/*
 * 下面的代码是反向断言
 */

assert.doesNotMatch('I will fail', /pass/, 'MSG:13');
assert.doesNotMatch('123', /pass/, 'MSG:14');
// assert.doesNotMatch(123, /pass/, 'MSG:15');
// assert.doesNotMatch('I will pass', /pass/, 'MSG:16');

/* MSG:15 代码断言失败的原因是 123 类型不对 */
