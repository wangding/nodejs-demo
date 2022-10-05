#!/usr/bin/env node

const https = require('https');

const url = 'https://api.github.com/search/repositories?q=user:' + (process.argv[2] || 'wangding'),
      log = console.log,
      headers = { 'User-Agent': '02-get-repos.js' };

https.get(url, {headers}, (res) => {
  let result = '';

  res.on('data', (data) => result += data.toString('utf8'));
  res.on('end', () => {
    let reps = JSON.parse(result);

    log('Total:', reps.items.length);
    log('==========================');
    for(let i=0; i<reps.items.length; i++) {
      log('%d\t%s', (i + 1), reps.items[i].name);
    }
  });
});
