#!/usr/bin/node

const Writable = require('stream').Writable;

function GreenStream() {
  Writable.call(this);
}

GreenStream.prototype = Writable.prototype;

GreenStream.prototype._write = (chunk, encoding, callback) => {
  process.stdout.write('\033[1;32m' + chunk + '\033[1;37m');
  callback();
};

process.stdin.pipe(new GreenStream());
