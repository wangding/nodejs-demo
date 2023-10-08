#!/usr/bin/env node

const fs  = require('fs');

const data = [];
let lines = fs.readFileSync('/etc/passwd', 'utf8');
lines = lines.split('\n');
lines.forEach(line => {
  const arr = line.split(':');
  const obj = {
    user_name: arr[0],
    user_id: arr[2],
    group_id: arr[3],
    home_dir: arr[5],
    login_shell: arr[6],
  };
  data.push(obj);
});

console.table(data);
