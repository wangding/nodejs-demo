#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2] || __filename;

if(fs.existsSync(file)) {
  fs.createReadStream(file).pipe(process.stdout);
} else {
  console.error('%s not exist!', file);
  process.exit(1);
}
