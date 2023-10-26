#!/usr/bin/env node

const http = require('http'),
      fs   = require('fs');

function getURLs() {
  const fileName = './book-1.json';
  let books = fs.readFileSync(fileName, 'utf8');
  books = JSON.parse(books).UpdateComicItems;
  return books.map(book => book.ShowConver);
}

function getBookCover() {
  let i = 1;
  getURLs().forEach(url => http.get(url, res => res.pipe(fs.createWriteStream(`./cover/${i++}.jpg`))));
}

getBookCover();
