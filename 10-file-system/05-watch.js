#!/usr/bin/node

var fs = require('fs');

var w = fs.watch(__dirname, console.log);

process.on('SIGINT', function() {
  w.close();

  console.log('unwitch the directory');
  console.log('Game over after ten second...');

  setTimeout(function() {
    process.exit();
  }, 10000);
});
