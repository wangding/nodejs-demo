#!/usr/bin/node

const cp = require('child_process');

var cmd = process.argv[2];

cp.exec(cmd, (err, stdout) => {
  console.log(stdout);
});
