#!/usr/bin/node

const Circle = require('./04-export-object.js'),
      chalk = require('chalk'),
      log   = console.log,
      info  = chalk.greenBright;

var c = new Circle(20);

log(info('-----------------------------------'));
log(info(`area:         \t${c.area()}`));
log(info(`diameter:     \t${c.diameter()}`));
log(info(`circumference:\t${c.circumference()}`));
log(info('-----------------------------------'));

log(module);
