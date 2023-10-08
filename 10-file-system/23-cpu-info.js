#!/usr/bin/env node

const fs = require('fs');

process.platform == 'linux' ?
  console.log(fs.readFileSync('/proc/cpuinfo', 'utf8')) :
  console.error('当前的操作系统不支持');
