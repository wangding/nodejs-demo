#!/usr/bin/env node

/* global Promise: true */
const http    = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('app'),
      baseURL = 'https://ke.segmentfault.com/';

function getPage() {
  const url = baseURL + 'free';
  return new Promise(resolve => http.get(url, res => {
    print(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    print(res.headers);
    print('');

    let html = '';
    res.on('data', chunk => html+=chunk);
    res.on('end', () => resolve(html));
  }));
}

async function getCourseInfo() {
  const html = await getPage();
  print(html);

  const $ = cheerio.load(html);
  $('body').find('.card-title>a').each(function(){
    const cName = $(this).text(),
          cURL  = baseURL + $(this).attr('href');

    if(cName === '') return;
    log(`课程名称：${cName}\n课程网址：${cURL.trim()}\n`);
  });
}

getCourseInfo();
