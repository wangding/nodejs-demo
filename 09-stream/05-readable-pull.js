#!/usr/bin/env node

const { Readable } = require('stream');

let rs = new Readable(),
    c  = 'a'.charCodeAt(0);

rs._read = () => {
  rs.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
