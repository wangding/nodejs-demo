#!/usr/bin/env node

const http = require('http');

const cityCodes = {
  '北京': 101010100,
  '上海': 101020100,
  '天津': 101030100,
  '重庆': 101040100,
  '香港': 101320101,
  '澳门': 101330101,
  '石家庄': 101090101,
};

http.createServer((req, rs)=>{
  const cityName = decodeURI(req.url).slice(1);
  const cityCode = cityCodes[cityName];
  const url  = 'http://t.weather.sojson.com/api/weather/city/' + cityCode;

  http.get(url, res=>{
    let data = '';
    res.on('data', chunk => data+=chunk);
    res.on('end', () => {
      rs.setHeader('Content-Type', 'text/plain; charset=utf-8');
      rs.end(data);
    });
  });
}).listen(8080);
