function add(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return  NaN;
  } else {
    return x+y;
  }
}

module.exports = add;
