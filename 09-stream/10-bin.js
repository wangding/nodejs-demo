#!/usr/bin/env node

const fs = require('fs'),
      buf = Buffer.alloc(256);

for(let i=0; i<buf.length; i++) buf[i] = i;

fs.writeFileSync('test.bin', buf, 'binary');
