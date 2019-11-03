var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  var count = 1;

  if(global.isFinite(req.cookies.count)) {
    count = Number(req.cookies.count) + 1;
  }

  res.cookie('count', count);
  res.render('index', { 'count': count });
});

module.exports = router;
