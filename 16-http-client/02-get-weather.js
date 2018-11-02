#!/usr/bin/node

const http = require('http');

var city = process.argv[2] || '石家庄';
var addr = 'http://v.juhe.cn/weather/index?cityname=' + city + '&key=70b20823f67b5f0ca3358b796fd83260';

http.get(global.encodeURI(addr), (res) => {
  var result = '';

  res.on('data', (data) => {
    result += data.toString('utf8');
  });

  res.on('end', () => {
    var weather = JSON.parse(result);

    console.log(weather);
  });
});
