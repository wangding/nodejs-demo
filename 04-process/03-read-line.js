#!/usr/bin/env node

const readline = require('readline/promises');
const { stdin: input, stdout: output } = process;

const rl = readline.createInterface({ input, output });

const msg   = ['Name', 'Email', 'QQ', 'Mobile'];
let me = {};

async function main() {
  for(let i=0; i<4; i++) {
    const answer = await rl.question(msg[i] + ': ');
    me[msg[i]] = answer;
  }

  rl.close();
  console.log(me);
}

main();
