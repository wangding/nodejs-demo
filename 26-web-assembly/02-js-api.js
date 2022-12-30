#!/usr/bin/env node

/* global WebAssembly, Uint8Array: true */
const assert = require('assert');
const {readFileSync} = require('fs');

async function main() {
  const buf = new Uint8Array(readFileSync('./02-js-api.wasm'));
  assert(WebAssembly.validate(buf), '非法的 wasm 文件');
  const importObj = {
    imports: {
      imported_func: arg => console.log(arg)
    }
  };

  const {exported_func} = await WebAssembly.instantiate(buf, importObj)
    .then(res => res.instance.exports);
  exported_func();
}

main();
