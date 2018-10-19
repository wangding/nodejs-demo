#!/usr/bin/node

const zlib = require('zlib'),
      fs   = require('fs'),
      src  = process.argv[2];

if(process.argv.length !== 3) {
  console.error('命令行参数错误！');
  process.exit(1);
}

if(!fs.existsSync(src)) {
  console.error('%s not exist!', src);
  process.exit(2);
}

const dst = src + '.gz';

//fs.createReadStream(src).pipe(zlib.createGzip()).pipe(fs.createWriteStream(dst));

var buf = fs.readFileSync(src);

zlib.gzip(buf, (err, data) => {
  console.log('%s size: %d byte', src, buf.length);
  console.log('%s size: %d byte', dst, data.length);
  fs.writeFileSync(dst, data);
});
