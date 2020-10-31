#!/usr/bin/env node

const server = require('net').createServer(),
      log    = console.log,
      fs     = require('fs');

server.on('connection', (socket) => {
  log('new connection from', socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('data', (data) => {
    let cmd = data.slice(0, data.length-2);

    log(socket.remoteAddress + ':' + socket.remotePort + ' > ' + cmd);

    switch(cmd) {
      case 'ls': {
        let files = fs.readdirSync(__dirname);
        files.forEach(function(f) {
          socket.write(f + '\r\n');
        });
        break;
      }
      case 'quit': {
        server.close();
        process.exit();
        break;
      }
      default: {
        break;
      }
    }
  });

  socket.on('end', () => {
    log(socket.remoteAddress, 'disconnected');
  });
}).listen(8080, () => {
  log('TCP server is listening on port 8080');
});


