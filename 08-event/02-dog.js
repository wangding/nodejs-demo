const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {
  #name;
  #energy;

  constructor(name, energy) {
    super();
    this.#name   = name;
    this.#energy = energy;
  }

  #timer = setInterval(()=> {
    if(this.#energy > 0) {
      this.emit('bark');
      this.#energy--;
    } else {
      clearInterval(this.#timer);
    }
  }, 1000);

  get name() {
    return this.#name;
  }

  get energy() {
    return this.#energy;
  }
}

module.exports = Dog;
