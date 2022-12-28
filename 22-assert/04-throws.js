#!/usr/bin/env node

const assert = require('assert');

assert.throws(
  () => {
    console.log('arrow function');
    throw new Error('Wrong value');
  },
  Error,
  'MSG:11'
);

// assert.throws(
//   () => {
//     throw new Error('Wrong value');
//   },
//   TypeError,
//   'MSG:19'
// );
