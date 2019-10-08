#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      path = require('path'),
      log  = console.log;

http.createServer((req, res) => {
  printRequest(req);

  if(req.method === 'GET' && req.url === '/') { // 请求网站首页
    show(res, uploadPage());
    return;
  }
  
  if(req.method === 'GET' && req.url.split('/')[1] === 'images') { // 请求图片
    sendPic(req, res);
    return;
  } 

  if(req.method === 'POST' && req.url ==='/upload') { // 上传图片
    req.setEncoding('binary');
    var file;

    req.on('data', (data)=>{ file += data; });
    req.on('end', ()=>{
      if(writePic(file)) {
        show(res, uploadPage());
      } else {
        show(res, errorPage);
      }
    });

    return;
  } 
  
  show(res, errorPage); // 其他请求
}).listen(8080);

function sendPic(req, res) {
  var info = req.url.split('/'),
      pic  = path.join(__dirname, req.url),
      ext = info[2].split('.')[1];

  if(info.length !== 3 || !fs.existsSync(pic)) {
    show(res, errorPage);
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/' + ext);
  res.setHeader('Content-length', fs.statSync(pic).size);
  res.end(fs.readFileSync(pic));
}

function printRequest(req) {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
}

function writePic(file) {
  var data = file.split('\r\n');
  var fileName = qs.parse(data[1].split(';')[2].trim())['filename'],
      start = data[0].length + data[1].length + data[2].length + data[3].length + 8,
      end   = file.indexOf('------WebKitFormBoundary', start),
      buf   = file.slice(start, end);

  fileName = fileName.slice(1, fileName.length-1);

  if(fileName === '') return false;

  fileName = path.join(__dirname, 'images', fileName);
  fs.writeFileSync(fileName, buf, {'encoding': 'binary'});
  
  return true;
}

function show(res, page) {
  res.statusCode = 404;
  res.setHeader('Content-Length', page.length);
  res.setHeader('Content-Type', 'text/html');

  res.end(page);
}

function uploadPage() {
  var images = fs.readdirSync('./images');

  return ''
      + '<!DOCTYPE html>'
      + '<html>'
        + '<head>'
          + '<meta charset="UTF-8">'
          + '<title>Upload Picture</title>'
        + '</head>'
        + '<body>'
          + '<h1>Upload Picture</h1>'
          + '<form method="post" enctype="multipart/form-data" action="/upload">'
            + '<input type="file" name="upload" accept=".png, .jpg, .jpeg, .gif, .bmp">'
            + '<input type="submit" value="Upload">'
          + '</form>'
          + '<div id="album">'
            + images.map(function(pic) { return '<img src="/images/' + pic +'">'; }).join('\n')
          + '</div>'
        + '</body>'
      + '</html>';
}

var errorPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
      + '<head>'
        + '<meta charset="UTF-8">'
        + '<title>Error</title>'
      + '</head>'
      + '<body>'
        + '<h1>Sorry! There is  nothing!</h1>'
        + '<a href="/">back to upload file</a>'
      + '</body>'
    + '</html>';
