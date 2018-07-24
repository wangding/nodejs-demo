#!/usr/bin/node

const fs   = require('fs'),
      file = process.argv[2] || __filename;

fs.readFile(file, (err, buf) => {
  if(err) {
    console.error(err.message);
    process.exit(1);
  } else {
    console.log(buf.toString('utf8'));
  }
});
