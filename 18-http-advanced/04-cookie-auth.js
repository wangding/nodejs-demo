#!/usr/bin/node

const http = require('http'),
      qs   = require('querystring');

var isLogin;

http.createServer((req, res) => {
  var data = '';

  if(typeof req.headers['cookie'] === 'undefined') {
    isLogin = false;
  } else {
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
  }

  console.log(isLogin);

  if(req.method === 'POST' && req.url === '/login') {
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      var account = qs.parse(data);

      if(account.user === 'wangding' && account.password === '123') {
        console.log('user: %s, password: %s', account.user, account.password);
        isLogin = true;
        showHome(res);
      } else {
        showLogin(res);
      }
    });
  }

  if(req.method === 'GET') {
    if(isLogin) {
      if(req.url === '/logout') {
        isLogin = false;
        res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);
        showLogin(res);
      } else {
        showHome(res);
      }
    } else {
      showLogin(res);
    }
  }
}).listen(8080);

function showLogin(res) {
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>登录</title>'
            + '  </head>'
            + '  <body>'
            + '    <form method="post" action="/login">'
            + '       <p>用户名：<input type="text" name="user"></p>'
            + '       <p>密　码：<input type="password" name="password"></p>'
            + '       <p><input type="submit" value="登录"></p>'
            + '    </form>'
            + '  </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

function showHome(res) {
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>home</title>'
            + '  </head>'
          + '    <body>'
          + '       <h1>This is home page, you are login!</h1>'
          + '       <a href="/logout">logout</a>'
          + '    </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);

  res.statusCode = 200;
  res.end(html);
}
