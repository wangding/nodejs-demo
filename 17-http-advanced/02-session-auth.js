#!/usr/bin/node

const http = require('http'),
      qs   = require('querystring');

var sessions = {},            // 存放 Session 的字典
    key      = 'SessionID',
    EXPIRES  = 56 * 1000,
    isLogin  = false;

function genSession() {
  var session = {
    id: (new Date()).getTime() + Math.random(),
    expire: (new Date()).getTime() + EXPIRES
  };

  sessions[session.id] = session;
  
  return session;
}

function getCookie(req) {
  if(typeof req.headers['cookie'] === 'undefined') return null;
  
  var cookieArray = req.headers['cookie'].split(';'),
      cookies     = {};
  
  cookieArray.forEach((cookie) => {
    var pair = cookie.trim().split('=');
    cookies[pair[0]] = pair[1];
  });

  return cookies;
}

http.createServer((req, res) => {
  var cookies = getCookie(req);
  var sessionID = (cookies === null)? null : cookies[key];

  if(!sessionID) {    // Cookie 中没有 SessionID
    req.session = genSession();
    isLogin = false;
  } else {            // Cookie 中有 SessionID
    var session = sessions[sessionID];

    if(session) {     // Cookie 中的 SessionID 在 Session 列表中
      if(session.expire > (new Date()).getTime()) {   // Session 没有过期
        session.expire = (new Date()).getTime() + EXPIRES;
        req.session = session; 
        isLogin = true;
      } else {            // Session 过期了
        delete sessions[sessionID];
        req.session = genSession();
        isLogin = false;
      }
    } else {        // Cookie 中的 SessionID 没有在 Session 字典中
      req.session = genSession();
      isLogin = false;
    }
  }

  pageOpt(req, res);
}).listen(8080);


function pageOpt(req, res) {
  var data = '';

  if(req.method === 'POST' && req.url === '/login') {
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      var account = qs.parse(data);

      if(account.user === 'wangding' && account.password === '123') {
        console.log('user: %s, password: %s', account.user, account.password);
        isLogin = true;
        showHome(req, res);
      } else {
        showLogin(res);
      }
    });
  }

  if(req.method === 'GET') {
    if(isLogin) {
      if(req.url === '/logout') {
        isLogin = false;
        delete sessions[req.session.id];
        showLogin(res);
      } else {
        showHome(req, res);
      }
    } else {
      showLogin(res);
    }
  }
}

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

function showHome(req, res) {
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
  res.setHeader('Set-cookie', `${key}=${req.session.id}`);

  res.statusCode = 200;
  res.end(html);
}
