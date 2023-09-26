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

class Producer {
  constructor(queue) {
    this.#queue = queue;
  }

  create(data){
    log('+ prd create:', data);
    this.#queue.write(data);
  }

  #queue = null;
}

class Consumer {
  constructor(queue) {
    this.#queue = queue;
  }

  destroy(){
    log('- csm destroy:', this.#queue.read());
  }

  #queue = null;
}

function main() {
  const queue = new Queue(),
        prd   = new Producer(queue),
        csm   = new Consumer(queue);

  queue.on('data', ()=>csm.destroy());

  for(let i=0; i<5; i++) prd.create(i);
}

main();
