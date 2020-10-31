#!/usr/bin/env node

/* this code need node v12+ */

const log = console.log;

class Bomb {
  #id;
  #timerID;

  constructor(id) {
    this.#id = id;
  }

  start() {
    log(`#${this.#id} It will bomb after 3 second!`);
    this.#timerID = setTimeout(() => {
      log(`#${this.#id} BOMB!!!`);
    }, 3000);
  }

  clear() {
    clearTimeout(this.#timerID);
    log(`#${this.#id} is safe!`);
  }
}

let b1 = new Bomb(1);
b1.start();

let b2 = new Bomb(2);
b2.start();
setTimeout(b2.clear.bind(b2), 1000);
