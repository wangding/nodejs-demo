#!/usr/bin/env node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      log  = require('util').debuglog('UPLOAD-FILE');

const uploadPage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Upload File</title>
    </head>
    <body>
      <h1>Upload File</h1>
      <form method="post" enctype="multipart/form-data" action="/upload">
        <input type="file" name="upload">
        <input type="submit" value="Upload">
      </form>
    </body>
  </html>`;

const okPage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Upload File</title>
    </head>
    <body>
      <h1>Upload File OK!</h1>
      <a href="/">continue to upload</a>
    </body>
  </html>`;

let errorPage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Error</title>
    </head>
    <body>
      <h1>Sorry! There is  nothing!</h1>
      <a href="/">back to upload file</a>
    </body>
  </html>`;

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
    let file;
    req.on('data', (data)=>{
      file += data;
    });

    req.on('end', ()=>{
      let data = file.split('\r\n');
      log(data);
      let buf = data[4];
      let files = data[1].split(';');
      let fileName = qs.parse(files[2].trim())['filename'];
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
