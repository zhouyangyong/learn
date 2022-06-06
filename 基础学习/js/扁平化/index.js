let arr = [1, 2, [3, 4, [5, 6]], [7]];

// reduce方法
const reduceFlat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? reduceFlat(cur) : cur);
  }, []);
};
// console.log(reduceFlat(arr));

// es6提供的新方法 flat

const fatten = (arr) => arr.flat(Infinity);

// console.log(fatten(arr));

// 扩展运算符
const operateFlat = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
console.log(operateFlat(arr));

// split和toString共同处理
const splitFlat = (arr) => arr.toString().split(',').map(Number);

console.log(splitFlat(arr));
