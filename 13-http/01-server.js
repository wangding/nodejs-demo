#!/usr/bin/node

var server = require('http').createServer();

server.on('request', function(req, res) {
  console.log('REQUEST: ' + JSON.stringify(req.headers));
  req.pipe(process.stdout);
  res.end('hello world!');
});

server.listen(8080, function() {
  console.log('Listening on %d.', this.address().port);
});
