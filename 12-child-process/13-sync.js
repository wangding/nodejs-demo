#!/usr/bin/env node

const {spawnSync} = require('child_process'),
      log = console.log;

const cp = spawnSync('./03-child.js');

log(cp.stdout.toString('utf8'));
log('father PID:', process.pid);
