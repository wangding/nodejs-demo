#!/usr/bin/env node

const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];

if(process.argv.length !== 4) {
  console.error('usage：cmd username password');
  process.exit(1);
}

log('user name: %s\npassword: %s', usr, pwd);

// method A
log('Base64:', btoa(usr + ':' + pwd));

// method B
const buf = Buffer.from(usr + ':' + pwd);
log('Base64:', buf.toString('Base64'));
