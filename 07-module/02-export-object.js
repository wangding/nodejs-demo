#!/usr/bin/node

const pi = Math.PI;

module.exports = {
  diameter: (radius) => 2 * radius,
  circumference: (radius) => pi * 2 * radius,
  area: (radius) => pi * radius * radius
};

console.dir(module);
