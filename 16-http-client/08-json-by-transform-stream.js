#!/usr/bin/env node

// curl http://t.weather.sojson.com/api/weather/city/101330101 | ./08-json.js
// 因为 json 数据是嵌套的层次结构，不能按 chunk 来处理，所以流不适合
// 如果数据是扁平结构类似字节流的形式，可以按 chunk 来处理，流比较适合

const stdin  = process.stdin,
      stdout = process.stdout;

stdin.setEncoding('utf8');

const {Transform} = require('stream');

let json = new Transform();

json._transform = function(chunk, encoding, callback) {
  this.push(JSON.stringify(JSON.parse(chunk), null, 2));
  callback();
};

stdin.pipe(json).pipe(stdout);
