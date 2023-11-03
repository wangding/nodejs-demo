const verifyPassword = require('../03-password-verify');
const rules = require('../02-password-rules');
jest.mock('../02-password-rules', ()=>({
  ...jest.requireActual('../02-password-rules'),
  oneNumberRule:    jest.fn(() => ({passed: false, reason: 'fake reason'})),
}));

test('test verifyPassword with jest mock', ()=>{
  const errs = verifyPassword('abc', [rules.oneUpperCaseRule, rules.oneNumberRule]);
  expect(errs.length).toBe(2);
  expect(errs[1]).toBe('Error: fake reason');
});

test('test verifyPassword with fake fn', ()=>{
  const fakeRule1 = () => ({passed: true, reason: 'fake reason'});
  const fakeRule2 = () => ({passed: false, reason: 'fake reason'});
  const errs = verifyPassword('abc', [fakeRule1, fakeRule2]);
  expect(errs.length).toBe(1);
  expect(errs[0]).toBe('Error: fake reason');
});
