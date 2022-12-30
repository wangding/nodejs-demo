#!/usr/bin/env node

/* global WebAssembly, Uint32Array, Uint8Array: true */
const assert = require('assert');
const {readFileSync} = require('fs');

async function main() {
  const buf = new Uint8Array(readFileSync('./03-memory.wasm'));
  assert(WebAssembly.validate(buf), '非法的 wasm 文件');
  const memory = new WebAssembly.Memory({
    initial: 10,
    maximum: 100
  });

  WebAssembly
    .instantiate(buf, {js: {mem: memory}})
    .then(obj => {
      const summands = new Uint32Array(memory.buffer);

      for(let i=0; i<10; i++) summands[i] = i;
      const sum = obj.instance.exports.accumulate(0, 10);
      console.log(sum);
    });
}

main();
