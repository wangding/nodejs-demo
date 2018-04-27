#!/usr/bin/node

const Readable = require('stream').Readable;

var rs = new Readable();
rs.push('hello ');
rs.push('stream!\n');
rs.push(null);

rs.pipe(process.stdout);
