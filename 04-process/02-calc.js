#!/usr/bin/env node

const log = console.log,
      arg = process.argv[2];

if(typeof(arg) === 'undefined' ||
    arg === '--help' ||
    arg === '-h') {
  help();
} else {
  calc();
}

function help() {
  log('\
usage: cmd-name [OPTION] [expression]\n\
evaluate the expression.\n\
\n\
Mandatory arguments to long options are mandatory for short options too.\n\
-h, --help output help information and exit');
}

function calc() {
  try {
    log(`${arg} = ${eval(arg)}`);
  } catch(e) {
    console.error(`${arg} 不是合法的数学表达式！`);
  }
}

