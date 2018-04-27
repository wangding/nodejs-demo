#!/usr/bin/node

/*global pi:true */
global.pi = Math.PI;

global.circle = function(radius) {
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
  diameter : function(radius) { return 2 * radius; },
  circumference : function(radius) { return pi * 2 * radius; },
  area : function(radius) { return pi * radius * radius; }
};

