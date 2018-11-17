const express = require('express'),
      cookieParser = require('cookie-parser'),
      app     = express();

app.use(cookieParser('wangding_11w33'));
app.get('/', (req, res) => {
  console.log('cookie:', req.signedCookies);

  res.cookie('name', 'wangding', {maxAge: 100000, httpOnly: true, signed: true});
  res.cookie('age', 41, {maxAge: 100000, signed: true});
  res.send('OK!');
});

app.listen(8080);
