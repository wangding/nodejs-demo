#!/usr/bin/env node

const stdin  = process.stdin,
      stdout = process.stdout,
      { Transform } = require('stream');

stdin.setEncoding('utf8');

let tf = new Transform();

tf._transform = function(chunk, encoding, callback) {
  this.push(Buffer.from(chunk.toString('utf8').toUpperCase()));
  callback();
};

stdin.pipe(tf).pipe(stdout);
