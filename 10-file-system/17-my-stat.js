#!/usr/bin/env node

const fs  = require('fs'),
      src = process.argv[2] || __filename;

try{
  console.log(fs.statSync(src));
} catch(e) {
  console.error(e.message);
  process.exit(1);
}
