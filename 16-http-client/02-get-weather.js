#!/usr/bin/env node

const http = require('http');

const cityCode = {
  '北京': 101010100,
  '上海': 101020100,
  '天津': 101030100,
  '重庆': 101040100,
  '香港': 101320101,
  '澳门': 101330101,
  '石家庄': 101090101,
};

const city = process.argv[2] || '石家庄',
      addr = 'http://t.weather.sojson.com/api/weather/city/' + cityCode[city];

http.get(addr, res => {
  let data = '';

  res.on('data', chunk => data += chunk.toString('utf8'));
  res.on('end', () => {
    data = JSON.parse(data);
    console.dir(data, { depth: null, colors: true });
  });
});
