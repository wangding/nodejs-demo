const assert = require('assert');

/**
 * 计算信源熵
 *
 * h(p) = -p1*log2(p1) - p2*log2(p2) - ... - pn*log2(pn)
 *
 * 0 <= pi <= 1 and p1 + p2 + ... + pn = 1
 *
 * @param p 概率分布数组
 * @returns 返回信源熵
 */
function h(p) {
  assert(p instanceof Array, `${p} 不是数组类型`);
  assert.notEqual(p.length, 0, '数组为空');
  let total = 0;
  p.forEach(pi => {
    assert.equal(typeof pi, 'number', `${pi} 不是数值类型`);
    assert(pi <= 1 && pi >=0, `${pi} 取值不在 [0-1] 之间`);
    total += pi;
  });
  assert.equal(total, 1, `${p} 的概率空间不封闭`);

  return p.reduce((total, pi) => total - pi * Math.log2(pi), 0);
}

/**
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数
 */
function roundFractional(x, n) {
  // assert(typeof x === 'number', `${x} 不是数值类型`);
  // assert(typeof n === 'number', `${n} 不是数值类型`);
  assert.equal(typeof x, 'number', `${x} 不是数值类型`);
  assert.equal(typeof n, 'number', `${n} 不是数值类型`);
  assert(n > 0, `${n} 不是正整数`);

  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

module.exports = { h, roundFractional };
