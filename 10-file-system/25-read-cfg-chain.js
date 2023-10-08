#!/usr/bin/env node

const fs  = require('fs'),
      log = console.log;

const app = {
  readConfig() {
    this._data = fs.readFileSync('../package.json', 'utf8');
    return this;
  },

  parse() {
    this._data = JSON.parse(this._data);
    return this;
  },

  print() {
    const { name, version, description } = this._data;
    log(`name: ${name}`);
    log(`version: ${version}`);
    log(`description: ${description}`);
  },

  _data: '',
};

app.readConfig()
   .parse()
   .print();
