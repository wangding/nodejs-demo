#!/usr/bin/node

const fs  = require('fs'),
      src = process.argv[2] || __filename;

try{
  console.log(fs.statSync(src));
} catch(err) {
  console.error(err.message);
  process.exit(1);
}
