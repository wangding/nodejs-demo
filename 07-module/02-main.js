#!/usr/bin/env node

const pi    = require('./02-export-var'),
      chalk = require('chalk'),
      log   = console.log,
      red   = chalk.redBright;

log(red('-----------------------'));
log(red(`PI: ${pi}`));
log(red('-----------------------'));

log(module);
