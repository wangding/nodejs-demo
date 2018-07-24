#!/usr/bin/node

const dgram = require('dgram');

var socket =  dgram.createSocket('udp4');
socket.bind(8080);

socket.on('message', (msg) => {
  var line = msg.toString('utf8');

  process.stdout.write(line, line.length);
});

socket.on('listening', () => {
  console.log('Server ready:', socket.address());
});
