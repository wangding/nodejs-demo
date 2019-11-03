var express = require('express');
var router = express.Router();

router.get('/', function(req, res/*, next*/) {
  if(typeof req.cookies.login === 'undefined') {
    res.render('login');
  } else if(req.cookies.login === 'true') {
    res.render('index');
  } else {
    res.render('login');
  }
});

router.post('/login', function(req, res) {
  if(req.body.userName === 'wangding' && req.body.password === '123') {
    res.cookie('login', true);
    res.render('index');
  } else {
    res.render('login');
  }
});

router.get('/logout', function(req, res){
  res.cookie('login', false);
  res.render('login');
});

router.get(/\/.*/, function(req, res){
  if(typeof req.cookies.login === 'undefined') {
    res.render('login');
  } else if(req.cookies.login === 'true') {
    res.render('index');
  } else {
    res.render('login');
  }
});

module.exports = router;
