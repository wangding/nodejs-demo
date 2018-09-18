#!/usr/bin/node

var me = {}, i = 1;

const msg = ['Name', 'Email', 'QQ', 'Mobile'],
      log = console.log;

log(msg[0] + ':');

const stdin = process.stdin;

stdin.on('data', (data) => {
  me[msg[i-1]] = data.slice(0, data.length - 1).toString('utf8');
  if(i === 4) {
    log(me);
    process.exit();
  } else {
    log(msg[i++] + ':');
  }
});

stdin.on('end', () => {
  log(me);
});

