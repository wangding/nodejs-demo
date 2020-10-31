#!/usr/bin/env node

/*
 * 在当前目录运行命令：cp -r 08-circle ../node_modules/circle
 */
const circle = require('circle'),
      log    = console.log;

log('area:          ', circle.area(20));
log('diameter:      ', circle.diameter(20));
log('circumference: ', circle.circumference(20));
