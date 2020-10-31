const EventEmitter = require('events').EventEmitter;

function Dog(name, energy) {
  let _name   = name,
      _energy = energy,
      that    = this;

  EventEmitter.call(this);

  let timer = setInterval(() => {
    if(energy > 0) {
      that.emit('bark');
      _energy--;
    }

    if(_energy < 0) {
      clearInterval(timer);
    }
  }, 1000);

  this.name = () => _name;
  this.energy = () => _energy;
}

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
