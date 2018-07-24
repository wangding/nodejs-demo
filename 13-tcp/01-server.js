#!/usr/bin/node

const server = require('net').createServer(),
      fs     = require('fs');

server.on('connection', (socket) => {
  console.log('new connection from', socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('data', (data) => {
    var cmd = data.slice(0, data.length-2);

    console.log(socket.remoteAddress + ':' + socket.remotePort + ' > ' + cmd);

    switch(cmd) {
      case 'ls':
        var files = fs.readdirSync(__dirname);
        files.forEach(function(f) {
          socket.write(f + '\r\n');
        });
        break;

      case 'quit':
        server.close();
        process.exit();
        break;

      default:
        break;
    }
  });

  socket.on('end', () => {
    console.log(socket.remoteAddress, 'disconnected');
  });
}).listen(8080, () => {
  console.log('TCP server is listening on port 8080');
});


