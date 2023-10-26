#!/usr/bin/env node

// curl http://t.weather.sojson.com/api/weather/city/101330101 | ./07-json.js

const stdin = process.stdin;

let data = '';
stdin.setEncoding('utf8');
stdin.on('data', chunk => data+=chunk);
stdin.on('end', ()=>console.dir(JSON.parse(data), {depth:null}));
