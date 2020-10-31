#!/usr/bin/env node

const dgram = require('dgram');

let socket = dgram.createSocket('udp4');
socket.bind(8080);

socket.on('message', (msg) => {
  let line = msg.toString('utf8');

  process.stdout.write(line, line.length);
});

socket.on('listening', () => {
  console.log('Server ready:', socket.address());
});
