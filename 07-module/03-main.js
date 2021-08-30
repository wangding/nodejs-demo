#!/usr/bin/env node

const circle = require('./03-export-function'),
      chalk = require('chalk'),
      log   = console.log,
      red   = chalk.redBright;

const c = circle(20);

log(red('-----------------------------------'));
log(red(`area:         \t${c.area()}`));
log(red(`diameter:     \t${c.diameter()}`));
log(red(`circumference:\t${c.circumference()}`));
log(red('-----------------------------------'));

log(module);
