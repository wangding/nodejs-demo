#!/usr/bin/node

console.time('GET-DATA');

var number;

for(var i=0; i<10000; i++) {
  for(var j=0; j<10000; j++) {
    number = i * j;
  }
}


console.timeEnd('GET-DATA');
console.log('number:', number);
