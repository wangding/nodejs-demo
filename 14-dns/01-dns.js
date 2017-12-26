#!/usr/bin/node

var dns = require('dns');

var ns = process.argv[2];

dns.resolve(ns, function(err, addr) {
  console.log(addr);
});
