const pi = Math.PI;

class Circle {
  #r;

  constructor(radius) {
    this.#r = radius;
  }

  diameter() {
    return 2 * this.#r;
  }

  circumference() {
    return pi * 2 * this.#r;
  }

  area() {
    return pi * this.#r * this.#r;
  }
}

module.exports = Circle;

console.log(module);
