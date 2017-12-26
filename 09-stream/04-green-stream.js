#!/usr/bin/node

var Writable = require('stream').Writable;
var util = require('util');

function GreenStream(options) {
  Writable.call(this);
}

GreenStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write('\033[1;32m' + chunk.slice(0, chunk.length-1) + '\033[1;37m');
  callback;
}

util.inherits(GreenStream, Writable);

process.stdin.pipe(new GreenStream());
