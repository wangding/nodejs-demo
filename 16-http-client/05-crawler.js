#!/usr/bin/env node

const http    = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('crawler'),
      baseURL = 'https://ke.segmentfault.com/',
      url     = baseURL + 'free';

http.get(url, (res) => {
  let result = '';

  print(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  print(res.headers);
  print('');

  res.on('data', chunk => result += chunk);
  res.on('end', () => {
    print(result);

    let $ = cheerio.load(result);
    $('body').find('.card-title>a').each(function(){
      let cName = $(this).text(),
          cURL  = baseURL + $(this).attr('href');

      if(cName === '') return;

      log('课程名称：', cName);
      log('课程网址：', cURL.trim());
      log('');
    });
  });
});
