#!/usr/bin/node

const http = require('http'),
      log  = console.log,
      fs   = require('fs');

var web = http.createServer();
web.listen(8080);

web.on('request', (req, res) => {
  log('==========');
  log(req.headers);

  var file = __dirname + req.url;

  /*
  var s = fs.createReadStream(file);
  s.on('error', (err) => {
    console.log(err.message);
    res.statusCode = 404;
    res.end(err.message);
  });
  s.pipe(res);
  */

  if(fs.existsSync(file)) {
    fs.createReadStream(file).pipe(res); 
  } else {
    res.statusCode = 404;
    res.end(req.url + ' not exist!');
  }
});
