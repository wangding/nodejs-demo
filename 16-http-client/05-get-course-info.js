#!/usr/bin/env node

const http    = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('crawler'),
      baseURL = 'https://ke.segmentfault.com/',
      url     = baseURL + 'free';

http.get(url, res => {
  print(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  print(res.headers);
  print('');

  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    print(html);

    const $ = cheerio.load(html);
    $('body').find('.card-title>a').each(function(){
      const cName = $(this).text(),
            cURL  = baseURL + $(this).attr('href');

      if(cName === '') return;
      log(`课程名称：${cName}\n课程网址：${cURL.trim()}\n`);
    });
  });
});
