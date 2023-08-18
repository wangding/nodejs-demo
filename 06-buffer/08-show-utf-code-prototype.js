#!/usr/bin/env node

const dec2Hex = num => num.toString(16);

String.prototype.toUTF8Code = function () {
  const code = encodeURI(this[0])
                .replace(/%/g, ' ')
                .trim();
  return (code == this[0]) ? this[0].toUTF16Code().slice(3) : code;
}

String.prototype.toUTF16Code = function() {
  const code = dec2Hex(this.charCodeAt(0))
          .toUpperCase()
          .replace(/(\w{2})/g, '$1 ')
          .trim();
  return code.length == 2 ? '00 ' + code : code;
}

function getCodeInfo(c) {
  return {
    "char":   c,
    "UTF-8":  c.toUTF8Code(),
    "UTF-16": c.toUTF16Code(),
  };
}

function main() {
  const msg = 'hello, 王顶';
  const codes = [...msg].map(getCodeInfo);
  console.table(codes);
}

main();
