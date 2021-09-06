class Event {
  on(evt, fn) {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      this.#listeners[evt] = [];
    }

    this.#listeners[evt].push(fn);
  }

  emit(evt, arg) {
    if(typeof(this.#listeners[evt]) === 'undefined') {
      throw(new Error(`${evt} is not defined!`));
    }

    this.#listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }

  #listeners = {};
}

module.exports = Event;
