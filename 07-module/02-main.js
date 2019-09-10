#!/usr/bin/node

const pi    = require('./02-export-var.js'),
      chalk = require('chalk'),
      log   = console.log,
      info  = chalk.greenBright;

log(info('-----------------------'));
log(info(`PI: ${pi}`));
log(info('-----------------------'));

log(module);
