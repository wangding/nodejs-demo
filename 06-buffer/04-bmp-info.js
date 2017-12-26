#!/usr/bin/node

var fs = require('fs');

fs.readFile('./nodejs-logo.bmp', function(err, buf) {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  if(buf.toString('ascii', 0, 2) === 'BM') {
    console.log('width:', buf.readInt32LE(0x12));
    console.log('height:', buf.readInt32LE(0x16));
    console.log('color depth:', buf.readUInt16LE(0x1c));
  }
})
