#!/usr/bin/env node

const fs  = require('fs'),
      log = console.log;

let w = fs.watch(__dirname, log);

process.on('SIGINT', () => {
  w.close();

  log('unwitch the directory');
  log('Game over after 5 second...');

  setTimeout(() => {
    process.exit();
  }, 5000);
});
