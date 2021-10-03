#!/usr/bin/env node

const http    = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('dev'),
      addr    = 'https://ke.segmentfault.com/free',
      baseURL = 'https://ke.segmentfault.com/';

http.get(addr, (res) => {
  let result = '';

  print(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  print(res.headers);
  print('');

  res.on('data', (data) => {
    result += data.toString('utf8');
  });

  res.on('end', () => {
    print(result);

    let $ = cheerio.load(result);
    $('body').find('.card-title>a').each(function(){
      print($(this).html());
      let cName = $(this).text(),
          cURL  = baseURL + $(this).attr('href');

      if(cName === '') return;

      log('课程名称：', cName);
      log('课程网址：', cURL.trim());
      log('');
    });
  });
});
