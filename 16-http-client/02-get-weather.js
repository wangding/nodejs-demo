#!/usr/bin/env node

const http = require('https');

const city = process.argv[2] || '石家庄',
      addr = 'https://api.66mz8.com/api/weather.php?location=' + city;

http.get(addr, res => res.pipe(process.stdout));
