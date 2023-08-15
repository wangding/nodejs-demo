#!/usr/bin/env node

const fs = require('fs'),
      { Console } = console;

const method = process.argv[2];

let logger;

if(method === 'stdout') {
  logger = console.log;
} else if(method === 'file') {
  const output = fs.createWriteStream('./stdout.log');
  logger = new Console({ stdout: output });
  logger = logger.log;
} else {
  console.log('usage: cmd stdout|file');
  process.exit();
}

logger('hello world');
