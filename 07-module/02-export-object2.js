#!/usr/bin/node

const pi = Math.PI;

module.exports.diameter = function(radius) { return 2 * radius; };
module.exports.circumference = function(radius) { return pi * 2 * radius; };
module.exports.area = function(radius) { return pi * radius * radius; };

console.dir(module);
