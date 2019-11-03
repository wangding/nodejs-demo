#!/usr/bin/node

const http = require('http');

var sessions = {},            // 存放 Session 的字典
    key      = 'SessionID',
    EXPIRES  = 5 * 1000;

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
  } else {            // Cookie 中有 SessionID
    var session = sessions[sessionID];

    if(session) {     // Cookie 中的 SessionID 在 Session 列表中
      if(session.expire > (new Date()).getTime()) {   // Session 没有过期
        session.expire = (new Date()).getTime() + EXPIRES;
        req.session = session; 
      } else {            // Session 过期了
        delete sessions[sessionID];
        req.session = genSession();
      }
    } else {        // Cookie 中的 SessionID 没有在 Session 字典中
      req.session = genSession();
    }
  }

  res.setHeader('Set-cookie', `${key}=${req.session.id}`);
  res.end('hello world!');
}).listen(8080);
