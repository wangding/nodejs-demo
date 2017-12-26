#!/usr/bin/node

var pi = Math.PI;

module.exports = function(radius) {
  function circumference() {
    return pi * 2 * radius;
  }

  function area() {
    return pi * radius * radius;
  }

  return {
    area: area,
    circumference: circumference
  };
}

console.log('\n02-export-function:\n', module);
