#!/usr/bin/env node

const stdin  = process.stdin,
      stdout = process.stdout;

stdin.setEncoding('utf8');

stdin.on('data', (data) => {
  stdout.write(data.toUpperCase());
});

stdin.push('hello world!\n');
//stdin.push(null);

//stdin.pipe(stdout);

for(let c='a'.charCodeAt(0); c<='z'.charCodeAt(0); c++) {
  stdout.write(String.fromCharCode(c));
}

stdout.write('\n');
