#!/usr/bin/env node

const Writable = require('stream').Writable,
      chalk = require('chalk');

class GreenStream extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    process.stdout.write(chalk.green(chunk));
    callback();
  }
}

process.stdin.pipe(new GreenStream());
