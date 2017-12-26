#!/usr/bin/node

var Radio = require('./03-radio');

var station = {
  freq: '106.7',
  name: 'music radio'
};

var radio = new Radio(station);

radio.on('open', function(station) {
  console.log('"%s" FM %s opened', station.name, station.freq);
  console.log('lalala...');
});

radio.on('open', function(station) {
  console.log('hello:', station);
  console.log('\neventNames:', radio.eventNames());
  console.log('\n open listener count:', radio.listenerCount('open'));
  console.log('\nopen listeners:', radio.listeners('open'));
});

radio.on('stop', function(station) {
  console.log('"%s" FM %s closed', station.name, station.freq);
});
