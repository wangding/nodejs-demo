#!/usr/bin/node

const fs  = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

try {
  fs.renameSync(src, dst);
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
