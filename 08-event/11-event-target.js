#!/usr/bin/env node

const target = new EventTarget(),
      log    = console.log;

target.addEventListener('foo', (e) => {
  log(e.type);
  log(e.value);
});

const e = new Event('foo');
e.value = 'abc';

target.dispatchEvent(e);
