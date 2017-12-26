#!/usr/bin/node

var Readable = require('stream').Readable;

var rs = new Readable();

var c = 97;
rs._read = function() {
  rs.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) rs.push(null);
}

rs.pipe(process.stdout);

process.on('uncaughtException', function() {
  process.exit(0);
});
