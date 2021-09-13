#!/usr/bin/env node

import { readFile } from 'fs/promises';

const file = process.argv[2];

async function main() {
  try {
    const content = await readFile(file, 'utf8');
    console.log(content);
  } catch(e) {
    console.error(e.message);
  }
}

main();
