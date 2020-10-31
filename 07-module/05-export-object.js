const pi = Math.PI;

module.exports = {
  diameter(radius) {
    return 2 * radius;
  },

  circumference(radius) {
    return pi * 2 * radius;
  },

  area(radius) {
    return pi * radius * radius;
  }
};

console.log(module);
