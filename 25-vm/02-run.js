#!/usr/bin/env node

const vm = require('vm'),
      fs = require('fs');

const byteCodeBuffer = fs.readFileSync('./code.bin');
const length = byteCodeBuffer.readIntLE(8, 4);
console.log(length);
const anotherScript = new vm.Script(
  ' '.repeat(length),
  {cachedData: byteCodeBuffer}
);
anotherScript.runInThisContext();
