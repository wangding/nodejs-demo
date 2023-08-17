#!/usr/bin/env node

const log = console.log;

let logPath = `/home/${process.env.USER}/.logs`;
log(logPath);

const os = require('os');
logPath = `${os.userInfo().homedir}/.logs`;
log(logPath);
log(os.userInfo());
