const pi = Math.PI;

class Circle {
  #r = 0;

  constructor(radius) {
    this.#r = radius;
  }

  get diameter() {
    return 2 * this.#r;
  }

  get circumference() {
    return pi * 2 * this.#r;
  }

  get area() {
    return pi * this.#r * this.#r;
  }
}

module.exports = Circle;

console.log(module);
