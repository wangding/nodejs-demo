#!/usr/bin/node

var http = require('http'),
    cp   = require('child_process'),
    qs   = require('querystring'),
    result = '';

http.createServer(function(req, res) {
  if(req.url != '/') {
    err(res);
    return;
  }

  console.log(req.headers);
  console.log('');

  switch(req.method) {
    case 'GET':
      show(res);
      break;

    case 'POST':
      execCmd(req, res);
      break;

    default:
      err(res);
      break;
  }
}).listen(8080);

function err(res) {
  var msg = 'Not found';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}

function show(res) {
  var html = '<!DOCTYPE html>\n' +
             '<html>\n' +
             '  <head>\n' +
             '    <meta charset="UTF-8">\n' +
             '    <title>execute linux command</title>\n' +
             '  </head>\n' +
             '  <body>\n' +
             '    <h1>Input a Linux Command</h1>\n' +
             '    <form method="post" action="/">\n' +
             '       <p><input type="text" name="cmd" />\n' +
             '       <input type="submit" value="execute" /></p>\n' +
             '    </form>\n' +
             '    <div>\n' + result +
             '    </div>\n' +
             '  </body>\n' +
             '</html>';
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.end(html);
}

function execCmd(req, res) {
  var cmd = '';

  req.on('data', function(chunk) { cmd += chunk; });
  req.on('end', function() {
    cmd = qs.parse(cmd).cmd;

    if(cmd === '') {
      result = 'Please input linux command';
      show(res);
    } else {
      cp.exec(cmd, function(err, stdout, stderr) {
        result = (err === null) ? stdout.replace(/\n/g, '<br/>') : stderr;
        show(res);
      });
    }
  });
}
