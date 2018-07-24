#!/usr/bin/node

const Radio = require('./03-radio');

const station = {
  freq: '106.7',
  name: 'music radio'
};

var radio = new Radio(station);

radio.on('open', (station) => {
  console.log('"%s" FM %s opened', station.name, station.freq);
  console.log('lalala...');
});

radio.on('stop', (station) => {
  console.log('"%s" FM %s closed', station.name, station.freq);
});
