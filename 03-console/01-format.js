#!/usr/bin/env node

const user = {
  name: '王顶',
  age:  41,
  qq:   '408542507'
};

const log = console.log;

// 占位符
log('name: %s', user.name);   // 字符串类型
log('age: %d', user.age);     // 整数类型
log('num: %i', 45);           // 整数类型
log('PI:  %f', 3.14);         // 浮点数
log('JSON: %j', user);        // 对象类型
log('Object: %o', user);      // 对象类型

log('qq: %s', user.qq);       // 输出方式一：占位符输出
log('qq:', user.qq);          // 输出方式二：逗号间隔，多变量输出
log('qq: ' + user.qq);        // 输出方式三：拼接字符串输出
log(`qq: ${user.qq}`);        // 输出方式四：模板字符串输出

console.dir(user);
console.dir([user, user]);

console.table(user);
console.table([user, user, user]);
console.table([user, user, user], ['name']);

console.error('Error! something wrong!');
