#!/usr/bin/node

const user = { 
  name: '王顶',
  age:  41,
  qq:   '408542507'
};

console.log('name: %s', user.name);
console.log('qq:', user.qq);
console.log(`qq: ${user.qq}`);
console.log('age: %d', user.age);
console.log('JSON: %j', user);

console.error('Error! something wrong!');
