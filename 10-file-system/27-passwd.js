#!/usr/bin/env node

const fs  = require('fs');

const data = [];
let lines = fs.readFileSync('/etc/passwd', 'utf8');
lines = lines.split('\n');
lines.forEach(line => {
  const [user_name,, user_id, group_id,, home_dir, login_shell] = line.split(':');
  data.push({user_name, user_id, group_id, home_dir, login_shell});
});

console.table(data);
