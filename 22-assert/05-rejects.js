#!/usr/bin/env node

/* global Promise:true */

const assert = require('assert');

assert.rejects(
  Promise.reject(new Error('Wrong value')),
  Error,
  'MSG:8'
);

// assert.rejects(
//   Promise.reject(new Error('Wrong value')),
//   TypeError,
//   'MSG:14'
// );

// assert.rejects(
//   Promise.resolve(new Error('Wrong value')),
//   Error,
//   'MSG:20'
// );
