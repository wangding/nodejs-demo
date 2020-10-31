#!/usr/bin/env node

const dns = require('dns');

const ns = process.argv[2];

dns.resolve(ns, (err, addr) => {
  console.log(addr);
});
