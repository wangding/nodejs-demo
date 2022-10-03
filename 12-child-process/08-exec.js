#!/usr/bin/env node

const {exec} = require('child_process');

const argv = process.argv;
argv.shift();
argv.shift();

const cmd = argv.join(' ');

exec(cmd, (err, stdout) => {
  console.log(stdout);
});
