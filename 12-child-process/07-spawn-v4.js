#!/usr/bin/node

console.log('PID:', process.pid);

const cp = require('child_process');

var cat  = cp.spawn('cat', ['./data.txt']),
    sort = cp.spawn('sort'),
    uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
