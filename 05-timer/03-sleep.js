#!/usr/bin/env node

/* global Promise:true */
//const { setTimeout } = require('node:timers/promises');

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve();
    }, ms);
  });
}

async function main() {
  console.log('hello');
  await sleep(2000);
  //await setTimeout(1000);
  console.log('world');
}

main();
