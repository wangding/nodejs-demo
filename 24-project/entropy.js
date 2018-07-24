#!/usr/bin/node

var p = [], i = 0;

const log = console.log,
      stdin = process.stdin,
      exit = process.exit,
      arg  = process.argv,
      help = ''
        + '用法：./entropy.js [-h | --help] [probability]\n'
        + '\n'
        + '无命令行参数时，程序进入交互输入模式，提示用户输入信源符号的概率分布。\n'
        + '用户按 Ctrl+D 结束输入，程序打印信源符号概率分布，并计算打印该信源熵。\n'
        + '\n'
        + '熵的计算公式：\n'
        + '  H(X) = -p1*log(p1, 2) - p2*log(p2, 2) - ... - pn*log(pn, 2)\n'
        + '  其中： 0 <= pi <= 1 并且 p1 + p2 + ... + pn = 1\n'
        + '\n'
        + '命令行参数:\n'
        + '  -h, --help              打印此帮助信息\n'
        + '  probability             信源符号的概率分布，支持以下两种格式：\n'
        + '                          1) 逗号分隔，例如：0.1,0.9\n'
        + '                          2) 空格分隔，例如：0.1 0.9';

if(arg.length == 3 && (arg[2] === '-h' || arg[2] === '--help')) {
  log(help);
  exit();
}

if(arg.length > 2 && validate()) {
  log('\np = %j\n', p);
  log(`h(p) = ${roundFractional(h(p), 3)} bit`);
  exit();
} 

p = [];

log('请输入信源概率分布：(Ctrl+D 退出输入)\np%d:', i);

stdin.on('data', (data) => {
  if(validatePi(data)) {
    p.push(Number(data));
    log('p%d:', ++i);
  }
});

stdin.on('end', () => {
  if(p.length === 0) {
    exit();
  }

  log('\np = %j\n', p);
  if(sigma(p) === 1) {
    log(`h(p) = ${roundFractional(h(p), 3)} bit`);
  } else {
    log('概率空间不封闭！无效的信源概率分布！');
  }
});

function validate() {
  if(arg.length === 3) {
    p = arg[2].split(',');
  } else {
    for(var i=2; i<arg.length; i++)  p.push(arg[i]);
  }

  if(p.length < 2) { 
    console.log('命令行参数错误：概率数据之前没有用逗号分隔！\n'); 
    return false;
  }

  for(i=0; i<p.length; i++) {
    if(!validatePi(p[i])) {
      log('');
      return false;
    }
  }

  if(sigma(p) !== 1) {
    log('命令行参数错误：概率空间不封闭！\n');
    return false;
  }

  for(i=0; i<p.length; i++)   p[i] = Number(p[i]);

  return true;
}

function validatePi(data) {
  if(isNaN(Number(data))) { log('请输入数字！');        return false; } 
  if(Number(data) < 0)    { log('请输入大于 0 的数！'); return false; } 
  if(Number(data) > 1)    { log('请输入小于 1 的数！'); return false; } 
  if(sigma(p) > 1)        { log('概率和超过了 1！');    return false; }

  return true;
}

function sigma(p) {
  return p.reduce((total, pi) => {
    return roundFractional(total + Number(pi), 2);
  }, 0);
}

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
  return p.reduce((total, pi) => {
    return total - pi * Math.log2(pi);
  }, 0);
}

/**
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数 
 */
function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
