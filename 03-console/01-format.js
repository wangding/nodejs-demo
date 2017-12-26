#!/usr/bin/node

var user = { name: '王顶',
             qq:   '408542507'};

console.log('name: %s', user.name);
console.log('qq: ${user.qq}');
console.log('age: %d', 40);
console.log('JSON: %j', user);

console.error('Error! something wrong!');
