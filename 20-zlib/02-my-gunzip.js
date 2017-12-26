#!/usr/bin/node

var zlib = require('zlib'),
    fs = require('fs'),
    assert = require('assert'),
    src = process.argv[2];

assert.notEqual(src, undefined, 'file name can not be null');

var dst = src.slice(0, src.length - 3);

fs.createReadStream(src).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(dst));
