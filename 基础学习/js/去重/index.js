const array = [1, 1, '1', '2', '1', 1, 2];

// 利用对象特性 时间复杂度 O(n)
const unique = (arr) => {
  let obj = {};
  return arr.filter((ele) => {
    return obj.hasOwnProperty(typeof ele + ele)
      ? false
      : (obj[typeof ele + ele] = true);
  });
};

// console.log(unique(array));

// Set 时间复杂度 O(n)
const uniqueSet = (arr) => {
  console.log('Set(arr)', new Set(arr));
  return [...new Set(arr)];
};

console.log(uniqueSet(array));
