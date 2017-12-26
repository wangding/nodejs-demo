#!/usr/bin/node

var pi = Math.PI;

var Circle = function (radius) {
  this.diameter = function() {
    return 2 * radius;
  }

  this.circumference = function() {
    return pi * 2 * radius;
  }

  this.area = function() {
    return pi * radius * radius;
  }
}

console.log('\n02-export-object\n', module);

module.exports = Circle;
