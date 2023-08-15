#!/usr/bin/env node

function menu() {
  const tab = ' '.repeat(10);
  const msg = `${tab} [1] 加法运算\n` +
              `${tab} [2] 减法运算\n` +
              `${tab} [3] 乘法运算\n` +
              `${tab} [4] 除法运算\n` +
              '\n' +
              `${tab} 请输入您的选项：`;

  console.clear();
  console.log(msg);
}

menu();
