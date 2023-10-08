#!/usr/bin/env node

const fs   = require('fs'),
      file = process.argv[2] ?? __filename;

try {
  let len = fs.statSync(file).size,
      buf = Buffer.alloc(len),
      fid = fs.openSync(file, 'r');

  fs.readSync(fid, buf, 0, len, 0);
  console.log(buf.toString('utf8'));
  fs.closeSync(fid);
} catch(e) {
  console.error(e.message);
  process.exit(1);
}
