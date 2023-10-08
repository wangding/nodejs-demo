#!/usr/bin/env node

const fs     = require('fs'),
      {join} = require('path');

function isProcessDir(dir) {
  return Number.isInteger(Number(dir)) && 
    fs.statSync(join('/proc', dir)).isDirectory();
}

function getProcessInfo(pid) {
  return {
    PID: pid,
    VSZ: getVmSize(pid),
    RSS: getVmRSS(pid),
    CMD: getCmdline(pid),
  };
}

function getCmdline(pid) {
  let cmdline = fs.readFileSync(`/proc/${pid}/cmdline`, 'utf8');
  return cmdline.replace(/\x00/g, ' ').trimEnd();
}

function getVmSize(pid) {
  const data = fs.readFileSync(`/proc/${pid}/status`, 'utf8');
  try {
    return data.match(/VmSize:\s*(\d+)/)[1];
  } catch {
    return 0;
  }
}

function getVmRSS(pid) {
  const data = fs.readFileSync(`/proc/${pid}/status`, 'utf8');
  try {
    return data.match(/VmRSS:\s*(\d+)/)[1];
  } catch {
    return 0;
  }
}

function main() {
  let dirs = fs.readdirSync('/proc');
  dirs = dirs.filter(isProcessDir);
  dirs.forEach(dir => console.log(getProcessInfo(dir)));
}

main();

/*
"ps aux"命令的各个字段可以在"/proc/pid"目录下的不同文件中找到以下信息：
%MEM：可以从"/proc/pid/statm"文件中的第 2 个字段（resident set size）计算得出。
告诉我 %MEM 是怎么计算出来的


ok-8. STAT：可以从"/proc/pid/stat"文件中的第 3 个字段（state）获取。

3. %CPU：可以从"/proc/pid/stat"文件中的第 14 个字段（utime）和第 15 个字段（stime）计算
得出。
7. TTY：可以从"/proc/pid/stat"文件中的第 7 个字段（tty_nr）获取，并与"/dev"目录下的终端
设备进行匹配。
9. START：可以从"/proc/pid/stat"文件中的第 22 个字段（start_time）获取，并经过转换为可读时间格式。
10. TIME：可以从"/proc/pid/stat"文件中的第 14 个字段（utime）和第 15 个字段（stime）计算得出。

4. %MEM：可以从"/proc/pid/statm"文件中的第 2 个字段（resident set size）计算得出。
*/
