#!/usr/bin/env node

const https = require('https');

const url = 'https://api.github.com/search/repositories?q=user:' + (process.argv[2] ?? 'wangding'),
      log = console.log,
      headers = { 'User-Agent': '02-get-repos.js' };

https.get(url, {headers}, res => {
  let data = '';
  res.setEncoding('utf8');
  res.on('data', chunk => data+=chunk);
  res.on('end', () => {
    const { items:reps } = JSON.parse(data);
    log('Total:', reps.length);
    log('==========================');
    for(let i=0; i<reps.length; i++)
      log(`${i+1}\t${reps[i].name}`);
  });
});
