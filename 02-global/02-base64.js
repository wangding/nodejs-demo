#!/usr/bin/env node

const log = console.log,
      src = 'wangding',
      dst = 'd2FuZ2Rpbmc=';

log(`src: ${src}\t\t encode=> \tdst: ${btoa(src)}`);
log(`dst: ${dst}\t decode=> \tsrc: ${atob(dst)}`);
