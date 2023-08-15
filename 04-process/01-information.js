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

log(`rss:       ${process.memoryUsage().rss}`);
log(`heapTotal: ${process.memoryUsage().heapTotal}`);
log(`heapUsed:  ${process.memoryUsage().heapUsed}`);
log(`external:  ${process.memoryUsage().external}\n`);

log('env:');
log(process.env);
log(`host name: ${process.env.HOSTNAME}`);

console.log('\nApp config:');
log(process.config);

process.report.writeReport();

const os = require('os');
log(os.cpus());
log(`linux uptime: ${os.uptime()} s`);
log(os.version());
log(os.networkInterfaces());
log(os.userInfo());
