#!/usr/bin/env node

const {spawn} = require('child_process');

const cat  = spawn('cat', ['./data.txt']),
      sort = spawn('sort'),
      uniq = spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
