#!/usr/bin/env node

const log = console.log;

log(`architecture: ${process.arch}`);
log(`platform:     ${process.platform}\n`);

log(`process id:   ${process.pid}`);
log(`exePath:      ${process.execPath}\n`);

log(`node version: ${process.version}`);
log(`user id:      ${process.getuid()}`);
log(`group id:     ${process.getgid()}`);
log(`cwd:          ${process.cwd()}\n`);

log('memoryUsage:');
console.dir(process.memoryUsage());

log('env:');
log(process.env);
log(`host name: ${process.env.HOSTNAME}`);

console.log('\nApp config:');
log(process.config);

process.report.writeReport();

const os = require('os');
log(os.cpus());
log(`linux uptime: ${os.uptime()} s`);
log(os.platform());
log(os.version());
log(os.networkInterfaces());
log(os.userInfo());
