#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2];

try {
  fs.writeFileSync(file, '');
} catch(e) {
  console.error(e.message);
  process.exit(1);
}
