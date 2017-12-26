#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2] || __filename;

fs.readFile(file, function(err, buf) {
  if(err) {
    console.log(err.message);
    process.exit(1);
  } else {
    console.log(buf.toString('utf8'));
  }
});

