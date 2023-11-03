function verifyPassword(pwd, rules) {
  const errors = [];
  rules.forEach(rule => {
    const res = rule(pwd);
    if(!res.passed) errors.push('Error: ' + res.reason);
  });
  return errors;
}

module.exports = verifyPassword;
