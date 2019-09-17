#!/usr/bin/node

const stdin  = process.stdin,
      stdout = process.stdout,
      Trans  = require('stream').Transform;

stdin.setEncoding('utf8');

var tf = new Trans();

tf._transform = function(chunk, encoding, callback) {
  this.push(Buffer(chunk.toString('utf8').toUpperCase()));
  callback();
};

stdin.pipe(tf).pipe(stdout);
