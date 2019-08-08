// 正则

function isReg(reg) {
  return Object.prototype.toString.call(reg) === '[object Date]';
}

// console.log(isReg(/1/));

function isFunction(fun) {
  return typeof fun === 'function';
}

function idUndefined(obj) {
  return obj === void 0;
}

function isNull(obj) {
  return obj === null;
}