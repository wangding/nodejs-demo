#!/usr/bin/env node

let http = require('http'),
    cp   = require('child_process'),
    qs   = require('querystring'),
    result = '';

http.createServer((req, res) => {
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
  const msg = 'Not found';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');

  res.end(msg);
}

function show(res) {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>execute linux command</title>
      </head>
      <body>
        <h1>Input a Linux Command</h1>
        <form method="post" action="/">
            <p><input type="text" name="cmd" />
            <input type="submit" value="execute" /></p>
        </form>
        <div><pre style="font-family: Consolas;">${result}</pre></div>
      </body>
    </html>`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.end(html);
}

function execCmd(req, res) {
  let cmd = '';

  req.on('data', chunk => cmd += chunk);
  req.on('end', () => {
    cmd = qs.parse(cmd).cmd;

    if(cmd === '') {
      result = 'Please input linux command';
      show(res);
    } else {
      console.log(cmd);
      cp.exec(cmd, (err, stdout, stderr) => {
        result = (err === null) ? stdout : stderr;
        show(res);
      });
    }
  });
}
