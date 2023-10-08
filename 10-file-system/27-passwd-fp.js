#!/usr/bin/env node

const fs  = require('fs');

function line2obj(line) {
  const arr = line.split(':');
  return {
    user_name: arr[0],
    user_id: arr[2],
    group_id: arr[3],
    home_dir: arr[5],
    login_shell: arr[6],
  };
}

let lines = fs.readFileSync('/etc/passwd', 'utf8');
lines = lines.split('\n');

console.table(lines.map(line2obj));
