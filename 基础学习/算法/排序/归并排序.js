function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  // console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log(left, right);
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());
  // console.log('result', result);
  return result;
}

// 始终都是O(n log n）的时间复杂度

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));
// [3, 44, 38, 5, 47, 15, 36]
// [26, 27, 2, 46, 4, 19, 50, 48]
// result [3, 26, 27, 2, 44, 38, 5,46,4,19,47,15,36,]
