#!/usr/bin/env node

const Dog = require('./02-dog');

let taidi  = new Dog('taidi', 4),
    zangao = new Dog('zangao', 8);

taidi.on('bark', onBark);
zangao.on('bark', onBark);

function onBark() {
  console.log(`${this.name} barked! energy: ${this.energy}`);
}
