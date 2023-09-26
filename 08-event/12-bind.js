#!/usr/bin/env node

// b = a + 10, 当 a 的值变化时，b 的值自动更新
// b 绑定到 a 上了，下面是实现的代码

const { EventEmitter } = require('events');

class A extends EventEmitter {
  constructor(value) {
    super();
    this.#value = value;
    this.emit('change');
  }

  get value() { return this.#value; }
  set value(value) {
    this.#value = value;
    this.emit('change');
  }

  #value = 0
}

class B {
  constructor(obj) {
    this.#value = obj.value + 10;
    obj.on('change', () => this.#value = obj.value + 10);
  }

  get value() { return this.#value; }
  set value(value) {
    this.#value = value;
    this.emit('change', value);
  }

  #value = 0
}

class App {
  static main() {
    const log = console.log;
    const a = new A(10);
    const b = new B(a);
    log(b.value);  // 20
    a.value = 20;
    log(b.value);  // 30
  }
}

App.main();
