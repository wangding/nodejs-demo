#!/usr/bin/env node

const http = require('https');

let city = process.argv[2] || '石家庄',
    addr = 'https://api.66mz8.com/api/weather.php?location=' + city;

http.get(global.encodeURI(addr), (res) => {
  let result = '';

  res.on('data', (data) => {
    result += data.toString('utf8');
  });

  res.on('end', () => {
    let weather = JSON.parse(result);

    console.log(weather);
  });
});
