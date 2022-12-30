#!/usr/bin/env node

const {readFileSync} = require('fs'),
      Benchmark = require('benchmark'),
      log = console.log;

async function main() {
  const buf = new Uint8Array(readFileSync('./fac.wasm'));
  const lib = await WebAssembly.instantiate(buf)
    .then(res => res.instance.exports);

  const suite = new Benchmark.Suite;
  suite
    .add('wasm', () => lib.fac(100))
    .add('js1', () => fac1(100))
    .add('js2', () => fac2(100))
    .on('cycle', (event) => log(String(event.target)))
    .on('complete', function () {
      log('Fastest is ' + this.filter('fastest').map('name'));
    }).run();
}

function fac1(n) {
  if (n <= 0) {
    return 1;
  }

  return n * fac1(n - 1);
}

function fac2(n) {
  let total = 1;
  for(let i=1; i<=n; i++) total *= i;
  return total;
}

main();
