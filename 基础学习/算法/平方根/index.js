// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

var mySqrt = function (x) {
  if (x == 0) return 0;

  let start = 1,
    end = x;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (mid == x / mid) {
      return mid;
    } else if (mid < x / mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

console.log(mySqrt(8));
