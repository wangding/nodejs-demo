#!/usr/bin/node

console.log('start...');


var timeID = setInterval(loop, 500);
timeID.unref();

function loop()
{
  console.log('I will loop forever!');
}

setTimeout(function() {
  console.log('Game Over!');
}, 5000);
