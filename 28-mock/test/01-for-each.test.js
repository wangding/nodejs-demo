const forEach = require('../01-for-each');

test('test forEach with fake', ()=>{
  const input = [1,2,3,4];
  const fake = value => value += 10;

  forEach(input, fake);
});


test('test forEach with jest mock', ()=>{
  const input = [1,2,3,4];
  const fake = jest.fn(value => value += 10);

  forEach(input, fake);
  expect(fake.mock.calls.length).toBe(4);
  expect(fake.mock.calls[0][0]).toBe(1);
  expect(fake.mock.calls[1][0]).toBe(2);
  expect(fake.mock.calls[2][0]).toBe(3);
  expect(fake.mock.calls[3][0]).toBe(4);
  expect(fake.mock.results[0].value).toBe(11);
  expect(fake.mock.results[1].value).toBe(12);
  expect(fake.mock.results[2].value).toBe(13);
  expect(fake.mock.results[3].value).toBe(14);
});

