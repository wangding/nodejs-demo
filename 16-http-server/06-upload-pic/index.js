#!/usr/bin/node

const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      path = require('path'),
      jsdom = require('jsdom'),
      { JSDOM } = jsdom,
      log  = console.log;

http.createServer((req, res) => {
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method === 'GET' && req.url === 'images') {
    
  }

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
      fileName = path.join(__dirname, 'images', fileName);
      fs.writeFileSync(fileName, buf, {'encoding': 'binary'});
    });

    show(res, renderUploadPg());

  } else {
    if(req.url === '/') {
      show(res, renderUploadPg());
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

function renderUploadPg() {
  var uploadPage = ''
      + '<!DOCTYPE html>'
      + '<html>'
        + '<head>'
          + '<meta charset="UTF-8">'
          + '<title>Upload Picture</title>'
        + '</head>'
        + '<body>'
          + '<h1>Upload Picture</h1>'
          + '<form method="post" enctype="multipart/form-data" action="/upload">'
            + '<input type="file" name="upload" accept=".png, .jpg, .jpeg, .gif">'
            + '<input type="submit" value="Upload">'
          + '</form>'
          + '<div id="album"></div>'
        + '</body>'
      + '</html>';

  const dom = new JSDOM(uploadPage);
  const $   = require('jquery')(dom.window);

  var $album = $('#album'),
      images = fs.readdirSync('./images');

  images.forEach((img) =>{
    var $image = $('<img>');
    $image.attr('src',  'http://192.168.174.144:8080/images/' + img);
    $album.append($image);
  });

  return dom.serialize();
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

