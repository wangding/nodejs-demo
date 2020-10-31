class Radio {
  #listeners = {};
  #station;

  constructor(station) {
    this.#station = station;
  }

  #open = setTimeout(() => {
    this.#emit('open', this.#station);
    clearTimeout(this.#open);
  }, 0);

  #stop = setTimeout(() => {
    this.#emit('stop', this.#station);
    clearTimeout(this.#stop);
  }, 5000);

  #emit = (evt, arg) => {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      throw(new Error(`Error: ${evt} not defined!`));
    }

    this.#listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }

  on(evt, fn) {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      this.#listeners[evt] = [];
    }

    this.#listeners[evt].push(fn);
  }
}

module.exports = Radio;
