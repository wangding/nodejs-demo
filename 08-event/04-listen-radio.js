#!/usr/bin/node

const Radio   = require('./04-radio.js'),
      station = {
        'freq': '106.7',
        'name': 'music Radio'
      };

var r = new Radio(station);

r.on('play', (station) => {
  console.log('FM %s %s is playing!', station.freq, station.name);
});

r.on('stop', (station) => {
  console.log('FM %s %s is stop!', station.freq, station.name);
});


