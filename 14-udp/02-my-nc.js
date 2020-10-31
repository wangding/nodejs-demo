#!/usr/bin/env node

const dgram  = require('dgram'),
      socket = dgram.createSocket('udp4');

let host = process.argv[2],
    port = process.argv[3];

process.stdin.on('data', (data) => {
  let line = data.toString('utf8');
  socket.send(line, 0, line.length, port, host);
});
