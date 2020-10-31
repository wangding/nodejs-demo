const pi = Math.PI;

module.exports = (radius) => {
  return {
    area() {
      return pi * radius * radius;
    },
    diameter() {
      return 2 * radius;
    },
    circumference() {
      return pi * 2 * radius;
    }
  };
};

console.log(module);
