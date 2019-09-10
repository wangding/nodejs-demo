#!/usr/bin/node

const circle = require('./05-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      info  = chalk.greenBright;

log(info('-----------------------------------'));
log(info(`area:         \t${circle.area(20)}`));
log(info(`diameter:     \t${circle.diameter(20)}`));
log(info(`circumference:\t${circle.circumference(20)}`));
log(info('-----------------------------------'));

log(module);
