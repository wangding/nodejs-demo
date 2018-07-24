#!/usr/bin/node

const pi = Math.PI;

module.exports.diameter = (radius) => 2 * radius;
module.exports.circumference = (radius) => pi * 2 * radius;
module.exports.area = (radius) => pi * radius * radius;

console.dir(module);
