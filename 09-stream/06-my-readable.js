#!/usr/bin/env node

const { Readable } = require('stream');

let c = 'a'.charCodeAt(0);

class MyReadable extends Readable {
  constructor() {
    super();
  }

  _read() {
    this.push(String.fromCharCode(c++));
    if (c>'z'.charCodeAt(0)) {
      this.push(null);
    }
  }
}

let rs = new MyReadable();
rs.pipe(process.stdout);
