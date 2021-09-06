const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {
  constructor(name, energy) {
    super();
    this.#name   = name;
    this.#energy = energy;
    this.#startTimer();
  }

  get name() { return this.#name; }
  get energy() { return this.#energy; }
  setEnergy(e) {
    this.#energy = e;
    this.#startTimer();
  }

  #name   = '';
  #energy = 0;
  #timer  = null;

  #startTimer() {
    if(this.#timer !== null) return;

    this.#timer = setInterval(()=> {
      if(this.#energy > 0) {
        this.emit('bark');
        this.#energy--;
      } else {
        clearInterval(this.#timer);
        this.#timer = null;
      }
    }, 1000);
  }
}

module.exports = Dog;
