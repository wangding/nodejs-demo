#!/usr/bin/env node

/*
 * cd ./08-circle && npm link
 * cd .. && npm link circle
 */
const circle = require('circle'),
      log    = console.log;

log('area:          ', circle.area(20));
log('diameter:      ', circle.diameter(20));
log('circumference: ', circle.circumference(20));
