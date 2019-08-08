// [1, 2, 3, 4, 5, 6]  2
// 排序 nLogN 已排序

function search(arr, data) {
  let min = 0,
      max = arr.length - 1,
      mid;
  while(min <= max) {
    mid = min + ((max - min) >> 1);
    if(arr[mid] > data) {
      max = mid - 1;
    } else if (arr[mid] < data) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 5))