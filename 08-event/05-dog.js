#!/usr/bin/node

function Dog(name, energy) {
  var _listeners = {};

  this.name = name;
  this.energy = energy;

  var timer = setInterval(() => {
    if(energy > 0) {
      emit('bark');
      this.energy--;
    }

    if(this.energy < 0) {
      clearInterval(timer);
    }
  }, 1000);

  this.on = (evt, fn) => {
    if(typeof(_listeners[evt]) === 'undefined') {
      _listeners[evt] = [];
    }

    _listeners[evt].push(fn);
  };

  function emit(evt, arg) {
    if(typeof(_listeners[evt]) === 'undefined') {
      console.error('Error: %s not defined!', evt);
      process.exit(1);
    }

    _listeners[evt].forEach((fn) => {
      fn.call(this, arg);
    });
  }
}

module.exports = Dog;
