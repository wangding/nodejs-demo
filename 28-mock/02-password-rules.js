function oneUpperCaseRule(pwd) {
  return {
    passed: pwd.toLowerCase() != pwd,
    reason: 'at least one upper case needed'
  };
}

function oneNumberRule(pwd) {
  return {
    passed: /.*\d+.*/.test(pwd),
    reason: 'at least one number needed'
  };
}

module.exports = {
  oneUpperCaseRule,
  oneNumberRule,
};
