#!/usr/bin/node

const Num = require('./04-share.js'),
      log = console.log;

var n1 = new Num();
var n2 = new Num();

n1.add();
n1.add();

log('n1:', n1.getCount());
log('n2:', n2.getCount());

n2.add();

log('n1:', n1.getCount());
log('n2:', n2.getCount());
