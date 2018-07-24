#!/usr/bin/node

const pi = Math.PI;

module.exports = (radius) => {
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
};

console.dir(module);
