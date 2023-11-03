#!/bin/env node

const add = require('./calc');

if(process.argv.length != 4) {
  console.log('Usage: cmd x y');
  process.exit(1);
}

const [,,x, y] = process.argv;
console.log(`${x} + ${y} = ${add(Number(x), Number(y))}`);
