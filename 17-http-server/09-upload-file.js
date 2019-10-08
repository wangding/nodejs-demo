#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      log  = require('util').debuglog('UPLOAD-FILE');

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method === 'POST') {
    if(req.url !== '/upload') {
      show(res, errorPage);
      return;
    }

    req.setEncoding('binary');
    var file;
    req.on('data', (data)=>{
      file += data;
    });

    req.on('end', ()=>{
      log(file.split('\r\n'));
      var buf = file.split('\r\n')[4];
      var files = file.split('\r\n')[1].split(';');
      var fileName = qs.parse(files[2].trim())['filename'];
      fileName = fileName.slice(1, fileName.length-1);
      fs.writeFileSync(fileName, buf, {'encoding': 'binary'});
    });

    show(res, okPage);
  } else {
    if(req.url === '/') {
      show(res, uploadPage);
    } else {
      show(res, errorPage);
    }
  }
}).listen(8080);

function show(res, page) {
  res.statusCode = 404;
  res.setHeader('Content-Length', page.length);
  res.setHeader('Content-Type', 'text/html');

  res.end(page);
}

var uploadPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
      + '<head>'
        + '<meta charset="UTF-8">'
        + '<title>Upload File</title>'
      + '</head>'
      + '<body>'
        + '<h1>Upload File</h1>'
        + '<form method="post" enctype="multipart/form-data" action="/upload">'
          + '<input type="file" name="upload">'
          + '<input type="submit" value="Upload">'
        + '</form>'
      + '</body>'
    + '</html>';

var okPage = ''
    + '<!DOCTYPE html>'
    + '<html>'
      + '<head>'
        + '<meta charset="UTF-8">'
        + '<title>Upload File</title>'
      + '</head>'
      + '<body>'
        + '<h1>Upload File OK!</h1>'
        + '<a href="/">continue to upload</a>'
      + '</body>'
    + '</html>';

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

