#!/usr/bin/node

var net = require('net');

if(process.argv.length < 4) {
  return console.log('Usage:\n\t ./02-my-telnet.js host port.');
}

var host = process.argv[2];
var port = process.argv[3];

var socket = net.connect({ host: host, port: port}, function() {
  console.log('connected to', host, 'on port', port);

  process.stdin.on('data', function(data) {
    var line = data.toString('utf8');
    line = line.slice(0, line.length-1) + '\r\n';
    socket.write(line);
  });

  socket.pipe(process.stdout);
});

socket.on('end', function() {
  console.log('disconnected from server');
  process.exit();
});
