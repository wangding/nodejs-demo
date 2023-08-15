#!/usr/bin/env node

const log   = console.log,
      stdin = process.stdin,
      stdout= process.stdout,
      msg   = ['Name', 'Email', 'QQ', 'Mobile'];

let me = {}, i = 1;

stdout.write(msg[0] + ': ');

stdin.on('data', (data) => {
  me[msg[i-1]] = data.slice(0, data.length - 1).toString('utf8');
  if(i === 4) {
    log(me);
    process.exit();
  }

  stdout.write(msg[i++] + ': ');
});

stdin.on('end', () => {
  log(me);
});
