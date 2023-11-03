function h(...p) {
  return Number((p.reduce((h, p) => h+=-1*p*Math.log2(p), 0)).toFixed(3));
}

module.exports = h;
