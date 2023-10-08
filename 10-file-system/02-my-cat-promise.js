#!/usr/bin/env node

const { readFile } = require('fs/promises');

const file = process.argv[2] ?? __filename;

async function main() {
  try {
    console.log(await readFile(file, 'utf8'));
  } catch(e) {
    console.error(e.message);
  }
}

main();
