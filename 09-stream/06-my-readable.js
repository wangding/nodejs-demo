#!/usr/bin/env node

const { Readable } = require('stream');

class MyReadable extends Readable {
  constructor() {
    super();
  }

  _read() {
    this.push(String.fromCharCode(this.#c++));
    if (this.#c>'z'.charCodeAt(0)) this.push(null);
  }

  #c = 'a'.charCodeAt(0);
}

const rs = new MyReadable();
rs.pipe(process.stdout);
