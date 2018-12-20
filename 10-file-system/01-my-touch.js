#!/usr/bin/env node

const fs   = require('fs'),
      file = process.argv[2];

fs.writeFileSync(file, '');
