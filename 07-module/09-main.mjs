#!/usr/bin/env node

import Circle from './09-export-object.mjs';

const c   = new Circle(process.argv[2] || 0),
      log = console.log;

log(`circle area:          ${c.area}`);
log(`circle circumference: ${c.circumference}`);
