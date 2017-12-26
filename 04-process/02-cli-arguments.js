#!/usr/bin/node

var argv = process.argv;

//console.log('arguments number:', argv.length);
//console.log('arguments:', argv);

var expression = argv[2];
console.log(expression + '=%d', eval(expression));
