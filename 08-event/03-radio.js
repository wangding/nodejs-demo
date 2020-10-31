const EventEmitter = require('events').EventEmitter,
      util         = require('util');

function Radio(station) {
  EventEmitter.call(this);

  let self = this;

  setTimeout(() => {
    self.emit('open', station);
  }, 0);

  setTimeout(() => {
    self.emit('stop', station);
  }, 5000);
}

util.inherits(Radio, EventEmitter);

module.exports = Radio;
