#!/usr/bin/env node

const log = console.log;

let timer1, timer2, count = 1;

log('start timer1...');

timer1 = setInterval(loop1, 500);

setTimeout(() => {
  log('Game Over!');
  clearInterval(timer1);
  log('start timer2...');
  timer2 = setInterval(loop2, 500);
}, 5000);

function loop1() {
  log('#1 I will loop forever!');
}

function loop2() {
  log('#2 I will loop forever!');
  if(count++ >= 5) {
    count = 0;
    log('Game Over!');
    global.clearInterval(timer2);
  }
}
