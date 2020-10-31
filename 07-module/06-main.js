#!/usr/bin/env node

const circle = require('./06-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      red   = chalk.redBright;

log(red('-----------------------------------'));
log(red(`area:         \t${circle.area(20)}`));
log(red(`diameter:     \t${circle.diameter(20)}`));
log(red(`circumference:\t${circle.circumference(20)}`));
log(red('-----------------------------------'));

log(module);
