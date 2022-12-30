#!/usr/bin/env node

const assert = require('assert');
const {readFileSync} = require('fs');

async function main() {
  const buf = new Uint8Array(readFileSync('./add.wasm'));
  assert(WebAssembly.validate(buf), '非法的 wasm 文件');
  const {add} = await WebAssembly.instantiate(buf)
    .then(res => res.instance.exports);
  console.log(add(2, 3));
}

main();
