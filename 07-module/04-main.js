#!/usr/bin/env node

const Circle = require('./04-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      red   = chalk.redBright;

const c = new Circle(20);

log(red('-----------------------------------'));
log(red(`area:           ${c.area}`));
log(red(`diameter:       ${c.diameter}`));
log(red(`circumference:  ${c.circumference}`));
log(red('-----------------------------------'));

log(module);
