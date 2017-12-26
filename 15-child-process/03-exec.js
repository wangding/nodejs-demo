#!/usr/bin/node

var cp = require('child_process');

var cmd = process.argv[2];

cp.exec(cmd, function(err, stdout, stderr) {
  console.log(stdout);
})
