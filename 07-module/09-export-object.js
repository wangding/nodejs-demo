const pi = Math.PI;

class Circle {
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

  #r = 0;
}

export default Circle;
