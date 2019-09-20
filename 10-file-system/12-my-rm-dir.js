#!/usr/bin/node

const fs  = require('fs'),
      err = console.error,
      dir = process.argv[2];

try {
  fs.rmdirSync(dir);
} catch(e) {
  err(e.message);
  process.exit(1);
}
