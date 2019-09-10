#!/usr/bin/node

const pi = Math.PI;

function Circle(radius) {
  var _r = radius;

  this.diameter = () => 2 * _r;
  this.circumference = () => pi * 2 * _r;
  this.area = () => pi * _r * _r;
}

module.exports = Circle;

console.log(module);
