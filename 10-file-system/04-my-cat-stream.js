#!/usr/bin/env node

const fs   = require('fs'),
      err  = console.error,
      file = process.argv[2] || __filename;

if(!fs.existsSync(file)) {
  err('%s not exist!', file);
  process.exit(1);
}
  
if(!fs.statSync(file).isFile()) {
  err('%s is not file!', file);
  process.exit(2);
}

fs.createReadStream(file).pipe(process.stdout);
