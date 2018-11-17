const express = require('express'),
      cookieParser = require('cookie-parser'),
      app     = express();

app.use(cookieParser());
app.get('/', (req, res) => {
  console.log('cookie:', req.cookies);

  res.cookie('name', 'wangding', {maxAge: 100000, httpOnly: true});
  res.cookie('age', 41, {maxAge: 100000});
  res.send('OK!');
});

app.listen(8080);
