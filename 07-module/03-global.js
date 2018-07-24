#!/usr/bin/node

/*global pi:true */
global.pi = Math.PI;

global.circle = (radius) => {
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

global.objCircle = {
  diameter : (radius) => 2 * radius,
  circumference : (radius) => pi * 2 * radius,
  area : (radius) => pi * radius * radius
};

