/*global document:true*/
document.onkeydown=keyListener;   // 用 keyListener 方法注册按键事件

function keyListener(e) {         // 当按下回车键，执行我们的代码
  if(e.keyCode == 13)     triangle();
}

function print(n) {
  var str = '<pre>';

  document.getElementById('output').innerHTML = '';

  for (var i=1; i<=n; i++)  {
    for(var j=1; j<=(n-i); j++)  str += ' ';  // 打印空格
    for(var k=1; k<=i*2-1; k++)  str += '*';  // 打印星号
    str += '<br/>';
  }

  document.getElementById('output').innerHTML = str;
}

function err(msg) {
  document.getElementById('output').innerHTML = msg;
}

function triangle() {

  var n = document.getElementById('level').value;   // 代表行数

  if (n >= 3 && n <= 10) { // 打印 3 层到 10 层金字塔
    print(n);
  }
  else if(n === '') {     // 输入为空时，默认打印 4 层金字塔
    print(4);
  }
  else if(n < 3) {        // 输入小于3时，提示错误
    err('层数太小，法老住不下！');
  }
  else if(n > 10) {       // 输入大于 10 时，提示错误
    err('太高了，没那么多钱!');
  }
  else {                  // 输入非法字符时，提示错误
    err('请输入 3 到 10 之间的数字！');
  }
}
