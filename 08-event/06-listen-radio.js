#!/usr/bin/env node

const Radio = require('./06-radio'),
      station = {
        freq: '106.7',
        name: 'music radio'
      };

let radio = new Radio(station);

radio.on('open', (s) => {
  console.log('"%s" FM %s opened', s.name, s.freq);
  console.log('lalala...');
});

radio.on('stop', (s) => {
  console.log('"%s" FM %s closed', s.name, s.freq);
});
