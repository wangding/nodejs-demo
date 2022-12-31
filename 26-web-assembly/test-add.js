#!/usr/bin/env node

/* global Uint8Array, WebAssembly: true */
const {readFileSync} = require('fs'),
      Benchmark = require('benchmark'),
      log = console.log;

async function main() {
  const buf = new Uint8Array(readFileSync('./add.wasm'));
  const lib = await WebAssembly.instantiate(buf)
    .then(res => res.instance.exports);

  const suite = new Benchmark.Suite;
  suite
    .add('wasm', () => lib.add(2, 2))
    .add('js', () => addTwo(2, 2))
    .on('cycle', (event) => log(String(event.target)))
    .on('complete', function () {
      log('Fastest is ' + this.filter('fastest').map('name'));
    }).run();
}

function addTwo(a, b) {
  return a + b;
}

main();
