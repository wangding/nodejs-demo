#!/usr/bin/env node

const http = require('http'),
      {spawn} = require('child_process');

console.log('father PID:', process.pid);

http.createServer((req, res) => {
  const cp = spawn('./03-child.js');

  cp.stdout.pipe(res);
}).listen(8080);
