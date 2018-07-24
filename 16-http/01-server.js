#!/usr/bin/node

const server = require('http').createServer();

server.on('request', (req, res) => {
  console.log('REQUEST: ' + JSON.stringify(req.headers));
  req.pipe(process.stdout);
  res.end('hello world!');
});

server.listen(8080, () => {
  console.log('Listening on %d.', this.address().port);
});
