#!/usr/bin/node

console.log('architecture:', process.arch);
console.log('platform:', process.platform);

console.log('');

console.log('process id:', process.pid);
console.log('exePath:', process.execPath);

console.log('');

console.log('node version:', process.version);
console.log('user id:', process.getuid());
console.log('group id:', process.getgid());
console.log('cwd:', process.cwd());

console.log('');

console.log('rss:', process.memoryUsage().rss);
console.log('heapTotal:', process.memoryUsage().heapTotal);
console.log('heapUsed:', process.memoryUsage().heapUsed);
console.log('external:', process.memoryUsage().external);

console.log('');

//console.log('\env:', process.env);
console.log('host name:', process.env.HOSTNAME);
