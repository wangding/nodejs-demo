#!/usr/bin/env node

const http = require('http'),
      log  = console.log,
      {exec} = require('child_process');

http.createServer((req, res) => {
  if(req.url != '/') {
    err(res);
    return;
  }

  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log('');

  switch(req.method) {
    case 'GET':
      show(res, '');
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

function show(res, result) {
  const html = `
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
  let cmd = '', result = '';

  req.on('data', chunk => cmd += chunk);
  req.on('end', () => {
    cmd = new URLSearchParams(cmd).get('cmd');

    if(cmd === '') {
      result = 'Please input linux command!';
      show(res, result);
    } else {
      console.log(cmd);
      exec(cmd, (err, out, stderr) => {
        result = (err === null) ? out : stderr;
        show(res, result);
      });
    }
  });
}
