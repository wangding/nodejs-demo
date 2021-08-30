#!/usr/bin/env node

const Num = require('./07-share'),
      log = console.log;

const n1 = new Num();
const n2 = new Num();

n1.add();
n1.add();

log('n1 =', n1.getCount());
log('n2 =', n2.getCount());
log('');

n2.add();

log('n1 =', n1.getCount());
log('n2 =', n2.getCount());
