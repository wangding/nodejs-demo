#!/usr/bin/env node

const vm = require('vm'),
      fs = require('fs');

const code = fs.readFileSync('./main.js', 'utf8');
console.log(code);

const script = new vm.Script(code, {
  produceCachedData: true
});
const byteCodeBuffer = script.cachedData;
console.log(byteCodeBuffer.length);
console.log(byteCodeBuffer);
fs.writeFileSync('./code.bin', byteCodeBuffer);
