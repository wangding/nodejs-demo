class Dog{
  #listeners = {};
  #name;
  #energy;

  constructor(name, energy) {
    this.#name   = name;
    this.#energy = energy;
  }

  #timer = setInterval(() => {
    if(this.#energy > 0) {
      this.#emit('bark');
      this.#energy--;
    } else {
      clearInterval(this.#timer);
    }
  }, 1000);

  on(evt, fn) {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      this.#listeners[evt] = [];
    }

    this.#listeners[evt].push(fn);
  }

  #emit = (evt, arg) => {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      throw(new Error(`${evt} is not defined!`));
    }

    this.#listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }

  get name() {
    return this.#name;
  }

  get energy() {
    return this.#energy;
  }
}

module.exports = Dog;
