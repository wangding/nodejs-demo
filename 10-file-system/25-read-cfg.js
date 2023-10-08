#!/usr/bin/env node

const fs  = require('fs'),
      log = console.log;

const cfg = fs.readFileSync('../package.json', 'utf8');
const {name, version, description} = JSON.parse(cfg);

log(`name: ${name}`);
log(`version: ${version}`);
log(`description: ${description}`);
