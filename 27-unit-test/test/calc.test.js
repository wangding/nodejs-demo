const add = require('../calc');

/*
describe('add 函数的单元测试', ()=>{
  test('0+0=0', ()=>{
    expect(add(0,0)).toBe(0);
  });

  test('1+1=2', ()=>{
    expect(add(1,1)).toBe(2);
  });

  test('a+1=NaN', ()=>{
    expect(add('a',1)).toBe(NaN);
    expect(isNaN(add('a',1))).toBe(true);
  });
});*/

describe('加法函数的动态测试', ()=>{
  test.each([
    [0, 0, 0],
    [0, 1, 1],
    [2, 3, 5],
    [-4, -2, -6],
    [1, 1023, 1024],
    [2.6, 3.8, 6.4],
    [2e2, 3e-2, 200.03],
  ])('%i + %i = %i',(a, b, exp)=>{
    expect(add(a,b)).toBe(exp);
  });

  test.each([
    ['abc', 1],
    ['a', 'b'],
    [',', 4],
  ])('%s + %s = NaN', (a, b)=>{
    expect(add(a,b)).toBe(NaN);
  });
});
