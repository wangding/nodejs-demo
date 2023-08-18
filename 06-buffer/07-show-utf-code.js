#!/usr/bin/env node

const dec2Hex = num => num.toString(16);

function utf8Code(str) {
  const code = encodeURI(str)
                .replace(/%/g, ' ')
                .trim();
  return code == str ? utf16Code(str).slice(3) : code;
}

const utf8 = new TextEncoder();
function utf8CodeV2(str) {
  return Array.from(utf8.encode(str))
    .map(dec2Hex)
    .join(' ')
    .toUpperCase();
}

function utf16Code(str) {
  const code = dec2Hex(str.charCodeAt(0))
                .toUpperCase()
                .replace(/(\w{2})/g, '$1 ')
                .trim();
  return code.length == 2 ? '00 ' + code : code;
}

function getCodeInfo(c) {
  return {
    "char":   c,
    "UTF-8":  utf8Code(c),
    "UTF-16": utf16Code(c),
  };
}

function main() {
  const msg = 'hello, 王顶';
  const codes = [...msg].map(getCodeInfo);
  console.table(codes);
}

main();
