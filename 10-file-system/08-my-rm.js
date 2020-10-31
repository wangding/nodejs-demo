#!/usr/bin/env node

const fs  = require('fs'),
      err = console.error,
      src = process.argv[2];

if(!fs.existsSync(src)) {
  err('%s not exist!', src);
  process.exit(1);
}

if(!fs.statSync(src).isFile()) {
  err('%s is not file!', src);
  process.exit(2);
}

fs.unlinkSync(src);
