#!/usr/bin/env node

const fs  = require('fs');

function line2obj(line) {
  const [user_name,, user_id, group_id,, home_dir, login_shell] = line.split(':');
  return {user_name, user_id, group_id, home_dir, login_shell};
}

let lines = fs.readFileSync('/etc/passwd', 'utf8');
lines = lines.split('\n');

console.table(lines.map(line2obj));
