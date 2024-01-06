#!/usr/bin/env node

const print  = console.log,
      {log2} = Math;

const p = process.argv.slice(2);

if(p.length < 2) {
  print('Usage: cmd probability\ne.g. cmd 0.2 0.8');
  process.exit(1);
}

const h = p => p
  .map(pi => Number(pi))
  .map(pi => -1 * pi * log2(pi))
  .reduce((total, pi) => total += pi)
  .toFixed(2);

print(`h(${p}) = ${h(p)} bit`);
