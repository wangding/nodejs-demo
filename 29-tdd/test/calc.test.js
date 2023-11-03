const h = require('../calc');

test('h(0.5,0.5)=1',()=>{
  expect(h(0.5,0.5)).toBe(1);
});

test('h(0.3,0.7)=0.881',()=>{
  expect(h(0.3,0.7)).toBe(0.881);
});
