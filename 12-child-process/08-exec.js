#!/usr/bin/env node

const cp = require('child_process');

let cmd = process.argv[2];

cp.exec(cmd, (err, stdout) => {
  console.log(stdout);
});
