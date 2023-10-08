#!/usr/bin/env node

const fs  = require('fs'),
      log = console.log,
      dir = process.argv[2] ?? __dirname;

if(!fs.existsSync(dir)) {
  console.error('%s not exists.', dir);
  process.exit(1);
}

if(!fs.statSync(dir).isDirectory()) {
  console.error('%s is not directory.', dir);
  process.exit(1);
}

const w = fs.watch(dir, log);

process.on('SIGINT', () => {
  w.close();

  log('unwitch the directory');
  log('Game over after 5 second...');

  setTimeout(process.exit, 5000);
});
