#!/usr/bin/env node

const { Readable } = require('stream');

let rs = new Readable();

rs.push('hello ');
rs.push('stream!\n');
rs.push(null);

rs.pipe(process.stdout);
