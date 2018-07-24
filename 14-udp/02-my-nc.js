#!/usr/bin/node

const dgram  = require('dgram'),
      socket = dgram.createSocket('udp4');

var host = process.argv[2];
var port = process.argv[3];

process.stdin.on('data', (data) => {
  var line = data.toString('utf8');
  socket.send(line, 0, line.length, port, host);
});
