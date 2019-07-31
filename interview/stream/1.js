const fs = require('fs');

fs
  .createReadStream('./sample.txt') // 可读流
  .pipe(process.stdout); // 流操作和管道 进程 调配资源的能力

