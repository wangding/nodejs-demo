#!/usr/bin/env node

const {execFile} = require('child_process'),
      argv = process.argv;

let cmd  = '',  // 命令
    arg  = [];  // 命令的参数

if(argv.length === 2) {
  cmd = 'cat';
  arg.push('01-exec-file.js');
} else {
  cmd = argv[2];
  arg = argv.slice(3, argv.length);
}

execFile(cmd, arg, (err, stdout) => {
  if(err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(stdout);
});
