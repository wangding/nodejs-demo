#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function Radio(station) {
  var that = this;
  
  for(var m in EventEmitter.prototype) {
    this[m] = EventEmitter.prototype[m];
  }

  setTimeout(function() {
    that.emit('play', station);
  }, 0);

  setTimeout(function() {
    that.emit('stop', station);
  }, 5000);
}

module.exports = Radio;
