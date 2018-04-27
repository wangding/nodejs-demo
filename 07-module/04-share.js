#!/usr/bin/node

var count = 0;

function Num() {}

Num.prototype.add = function() { count++; };

Num.prototype.getCount = function() { return count; };

module.exports = Num;
