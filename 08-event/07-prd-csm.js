#!/usr/bin/env node

const EventEmitter = require('events').EventEmitter;
const log = console.log;

class Queue extends EventEmitter {
  constructor() {
    super();
  }

  write(data) {
    this.#data.push(data);
    this.emit('data');
  }

  read() {
    return this.#data.shift();
  }

  log() {
    log(this.#data);
  }

  #data = [];
}

let queue = new Queue();

class Producer {
  constructor() {}
  create(data){
    log('+ prd create:', data);
    queue.write(data);
  }
}

class Consumer {
  constructor() {}
  destroy(){
    log('- csm destroy:', queue.read());
  }
}

let csm   = new Consumer();

queue.on('data', async()=>{
  csm.destroy();
});

function main() {
  const prd = new Producer();
  for(let i=0; i<5; i++) {
    prd.create(i);
  }
}

main();
