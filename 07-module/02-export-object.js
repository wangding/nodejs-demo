#!/usr/bin/node

const pi = Math.PI;

module.exports = {
  diameter : function(radius) { return 2 * radius; },
  circumference : function(radius) { return pi * 2 * radius; },
  area : function(radius) { return pi * radius * radius; }
};

console.dir(module);
