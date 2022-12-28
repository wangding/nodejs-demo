#!/usr/bin/env node

const fs = require('fs');
const assert = require('assert');

fs.readFile('./01-ok.js', (err, buf) => {
  assert.ifError(err);
  console.log(buf.toString('utf8'));
});

// fs.readFile('xyz', (err, buf) => {
//   assert.ifError(err);
//   console.log(buf.toString('utf8'));
// });
