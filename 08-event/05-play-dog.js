#!/usr/bin/env node

const Dog = require('./05-dog.js');

var taidi = new Dog('taidi', 4);
var zangao = new Dog('zangao', 8);
taidi.on('bark', onBark.bind(taidi));
zangao.on('bark', onBark.bind(zangao));

function onBark() {
  console.log('%s barked! energy: %s', this.name, this.energy);
}

