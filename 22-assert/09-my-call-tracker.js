#!/usr/bin/env node

class CallTracker {
  constructor() {
  }

  calls(fn, n) {
    this.#total = n;
    const that = this;
    function f() {
      that.#count++;
      fn();
    }
    return f;
  }

  verify() {
    if(this.#count !== this.#total) throw new Error(`function executed ${this.#count} times, expired executed ${this.#total} times.`);
  }

  #count = 0;
  #total = 0;
}

const tracker = new CallTracker();

function func() {
  console.log('func executed');
}

const callsfunc = tracker.calls(func, 1);

callsfunc();
//callsfunc();

process.on('exit', () => {
  console.log('bye');
  tracker.verify();
});
