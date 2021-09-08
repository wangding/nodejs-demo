#!/usr/bin/env node

const { Writable } = require('stream'),
      chalk = require('chalk');

class GreenStream extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    process.stdout.write(chalk.greenBright(chunk));
    callback();
  }
}

process.stdin.pipe(new GreenStream());
