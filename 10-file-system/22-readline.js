#!/usr/bin/env node

const readline = require('readline'),
      fs       = require('fs'),
      fileName = process.argv[2] ?? __filename,
      input    = fs.createReadStream(fileName),
      rl       = readline.createInterface({ input, crlfDelay: Infinity });

let num = 1;
rl.on('line', line => console.log(`${num++}\t${line}`));
rl.on('end', process.exit);
