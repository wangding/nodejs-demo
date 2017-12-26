#!/usr/bin/node

var buf = new Buffer(256);
buf[0] = 23;

console.log('buffer length:', buf.length);
console.log('\nbuffer content:', buf);


for(var i=0; i<256; i++) buf[i] = i;
console.log('\nbuffer content:', buf);


var end = buf.slice(250, 256);
console.log('\nbuf\'s end 6 items:', end);


end.fill(0);
console.log('\nbuf\'s end 6 items:', end);


var array = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf1 = new Buffer(array);

console.log('\nbuf1:', buf1.length, buf1);

var buf2 = new Buffer('hello world', 'utf8');
console.log('\nbuf2:', buf2.length, buf2.toString());

var buf3 = new Buffer(buf2.length);
buf2.copy(buf3, 0, 0, buf2.length);
console.log('\nbuf3:', buf3.length, buf3.toString());
