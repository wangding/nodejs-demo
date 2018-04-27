#!/usr/bin/node

const log = console.log;

log('architecture:', process.arch);
log('platform: %s\n', process.platform);

log('process id:', process.pid);
log('exePath: %s\n', process.execPath);

log('node version:', process.version);
log('user id:', process.getuid());
log('group id:', process.getgid());
log('cwd: %s\n', process.cwd());

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);
