#!/usr/bin/env node

import http from 'http';
import chalk from 'chalk';

http.createServer((req, res) => {
  console.log(chalk.greenBright(`${req.method} ${req.url} HTTP/${req.httpVersion}`));
  res.end('hello world');
}).listen(8080);
