#!/usr/bin/node

const stdin  = process.stdin,
      stdout = process.stdout,
      Trans  = require('stream').Transform;

stdin.setEncoding('utf8');

function MyTransform() {
  Trans.call(this);
}

MyTransform.prototype = Trans.prototype;
MyTransform.prototype._transform = function(chunk, encoding, callback) {
  this.push('\033[1;32m' + chunk.toString('utf8') + '\033[1;37m');
  callback();
};

var tf = new MyTransform();

stdin.pipe(tf).pipe(stdout);

