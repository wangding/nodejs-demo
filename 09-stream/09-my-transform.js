#!/usr/bin/env node

const stdin  = process.stdin,
      stdout = process.stdout,
      { Transform }  = require('stream'),
      chalk  = require('chalk');

stdin.setEncoding('utf8');

class MyTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chalk.greenBright(chunk.toString('utf8')));
    callback();
  }
}

let tf = new MyTransform();

stdin.pipe(tf).pipe(stdout);
