#!/usr/bin/node

const events = require('events'),
      util   = require('util');

var Radio = function(station) {
  events.EventEmitter.call(this);

  var self = this;

  setTimeout(() => {
    self.emit('open', station);
  }, 0);

  setTimeout(() => {
    self.emit('stop', station);
  }, 5000);
};

util.inherits(Radio, events.EventEmitter);

module.exports = Radio;
