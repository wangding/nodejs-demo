#!/usr/bin/env node

const Readable = require('stream').Readable;

let rs = new Readable();

rs.push('hello ');
rs.push('stream!\n');
rs.push(null);

rs.pipe(process.stdout);
