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

const city = process.argv[2] ?? '石家庄',
      addr = 'http://t.weather.sojson.com/api/weather/city/' + cityCode[city];

function format(obj) {
  return {
    '日期': `${obj.ymd} ${obj.week}`,
    '最高温': obj.high,
    '最低温': obj.low,
    '风力': `${obj.fx} ${obj.fl}`,
    '状态': obj.type,
  };
}

http.get(addr, res => {
  let data = '';
  res.setEncoding('utf8');
  res.on('data', chunk => data+=chunk);
  res.on('end', () => {
    data = JSON.parse(data).data.forecast;
    data = data.map(format);
    console.table(data);
  });
});
