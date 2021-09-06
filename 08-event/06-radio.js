const Event = require('./05-event.js');

class Radio extends Event {
  constructor(station) {
    super();
    this.#station = station;
  }

  #open = setTimeout(() => {
    this.emit('open', this.#station);
    clearTimeout(this.#open);
  }, 0);

  #stop = setTimeout(() => {
    this.emit('stop', this.#station);
    clearTimeout(this.#stop);
  }, 5000);

  #station;
}

module.exports = Radio;
