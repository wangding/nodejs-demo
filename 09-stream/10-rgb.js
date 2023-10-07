#!/usr/bin/env node

const { Readable } = require('stream');

class RGB extends Readable {
  constructor(num) {
    super();
    this.#num = num;
  }

  _read() {
    this.#pos++ > this.#num ? this.push(null) : this.push(this.#rgb());
  }

  #rgb() {
    let x = Math.round(Math.random()*100);
    return x <= 60 ? 'R' : ( x <= 75 ? 'G':'B');
  }

  #num = 0;
  #pos = 0;
}

const rs = new RGB(100);
rs.pipe(process.stdout);
