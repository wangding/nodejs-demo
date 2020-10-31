#!/usr/bin/env node

const Dog = require('./05-dog');

let taidi  = new Dog('taidi', 4),
    zangao = new Dog('zangao', 8);

taidi.on('bark', onBark.bind(taidi));
zangao.on('bark', onBark.bind(zangao));

function onBark() {
  console.log(`${this.name} barked! energy: ${this.energy}`);
}

