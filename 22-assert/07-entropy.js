#!/usr/bin/env node

const { h, roundFractional } = require('./lib');
const log = console.log;

log('2.34 =', roundFractional(2.34, 1));
log('h(0.5, 0.5) =', h([0.5, 0.5]));

// log('2.34 =', roundFractional(true, 1));
log('2.34 =', roundFractional(2.34, -1));

// log('h(0.5, 0.5) =', h());
// log('h(0.5, 0.5) =', h([]));
// log('h(0.5, 0.5) =', h(['0.1', '0.9']));
// log('h(0.5, 0.5) =', h([2, 0.3]));
// log('h(0.5, 0.5) =', h([0.2, 0.3]));
