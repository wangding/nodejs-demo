#!/usr/bin/env node

const https = require('https'),
      log   = console.log,
      url   = require('url');

let addr    = 'https://api.github.com/search/repositories?q=user:' + (process.argv[2] || 'wangding'),
    options = url.parse(addr);

options.headers = {
  'User-Agent': '02-get-repos.js'
};

https.get(options, (res) => {
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
