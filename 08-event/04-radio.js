#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Radio(station) {
  var that = this;
  
  for(var m in EventEmitter.prototype) {
    this[m] = EventEmitter.prototype[m];
  }

  setTimeout(() => {
    that.emit('play', station);
  }, 0);

  setTimeout(() => {
    that.emit('stop', station);
  }, 5000);
}

module.exports = Radio;
