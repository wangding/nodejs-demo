#!/usr/bin/env node

const fs  = require('fs'),
      dir = process.argv[2];

try {
  fs.rmdirSync(dir);
} catch(e) {
  console.error(e.message);
  process.exit(1);
}
