var express = require('express');
var debug = require('debug')('12-session-auth:server');
var router = express.Router();
var users = require('../users.json');

router.get('/logout', function(req, res){
  if(typeof req.session.user !== 'undefined') {
    req.session.destroy();
  }
  res.render('login');
});

router.get(/\/.*/, function(req, res) {
  if(typeof req.session.user === 'undefined') {
    res.render('login');
  } else {
    res.render('index', {user: req.session.user});
  }
});

router.post('/login', function(req, res){
  if(isLegalUser(req)) {
    var user = {
      'username': req.body.username,
      'password': req.body.password
    };

    debug(req.sessionID);
    req.session.user = user;
    debug(req.session);

    res.render('index', {user: req.session.user});
  } else {
    res.render('login');
  }
});

function isLegalUser(req) {
  var user = {
    'username': req.body.username, 
    'password': req.body.password
  };

  var isLegal = false;

  for(var i = 0; i < users.length; i++) {
    if(users[i].username === user.username && users[i].password === user.password) {
      isLegal = true;
      break;
    }
  }

  return isLegal;
}

module.exports = router;
