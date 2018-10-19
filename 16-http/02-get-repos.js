#!/usr/bin/env node

const https = require('https'),
      url   = require('url');

var addr = 'https://api.github.com/search/repositories?q=user:' + (process.argv[2] || 'wangding');

var options = url.parse(addr);

options.headers = {
  'User-Agent': '02-get-repos.js'
};

https.get(options, function(res) {
  var result = '';

  res.on('data', function(data) {
    result += data.toString('utf8');
  });
  
  res.on('end', function() {
    var reps = JSON.parse(result);

    console.log('Total:', reps.total_count);
    console.log('==========================');
    for(var i=0; i<reps.total_count; i++) {
      console.log('%d\t%s', i, reps.items[i].name);
    }
  });
});
