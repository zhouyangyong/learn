// 柯里化好处： 1、参数复用 2、提前确认 3、延迟运行

// es5 实现
function curry1(fn) {
  return function curriedFn() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length < fn.length) {
      // fn.length 形参的长度
      return function () {
        var args2 = Array.prototype.slice.call(arguments);
        return curriedFn.apply(null, args.concat(args2));
      };
    }
    return fn.apply(null, args);
  };
}

function getSum(a, b, c) {
  return a + b + c;
}

const curried = curry1(getSum);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1)(2)(3));

// es6 实现
function curry2(fn) {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }
    return fn(...args);
  };
}

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);
  console.log('_args', _args);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  // console.log('_adder', _adder.toString());
  return _adder;
}

console.info(add(1)(2)(3).toString());
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
