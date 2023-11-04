#!/usr/bin/env node

const http = require('http');

http.createServer((req, res)=>{
  console.log(req.url);
  const addr = new URL(req.url, `http://${req.headers.host}`);
  console.log(addr);
  if(req.url == '/') {
    res.end(emptyPage());
    return;
  }

  if(addr.search !== '') {
    res.end(resultPage(addr));
    return;
  }

  res.end(errPage());
}).listen(3000);

function errPage() {
  return '<body><h1>Not Found!</h1></body>';
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>计算器</title>
  <style>
    span {
      display: inline-block;
      border: 1px solid black;
      width: 170px;
      height: 20px;
    }
    label {
      display: inline-block;
      width: 50px;
      height: 30px;
    }
  </style>
</head>
<body>
  <form method="GET" action="">
    <label>宽度：</label>
    <input type="text" name="width" value="__width"/>
    <br />
    <label>高度：</label>
    <input type="text" name="height" value="__height"/>
    <br />
    <label>&nbsp;</label>
    <input type="submit" value="计算" />
    <br />
    <label>周长：</label>
    <span>perimeter</span>
    <br />
    <label>面积：</label>
    <span>area</span>
    <br />
  </form>
</body>
</html>`;

function emptyPage() {
  return html.replace('area', '')
    .replace('perimeter', '')
    .replace('__width', '')
    .replace('__height', '');
}

function resultPage(addr) {
  let [width, height] = addr.searchParams.values();
  [width, height] = [Number(width), Number(height)];

  const rect = {
    area: width * height,
    perimeter: 2 * (width + height)
  };

  return html.replace('area', rect.area)
    .replace('perimeter', rect.perimeter)
    .replace('__width', width)
    .replace('__height', height);
}
