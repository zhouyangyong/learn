// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）

var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1,
        right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// var fiveSum = function (nums, target) {
//   if (nums.length < 4) return [];
//   nums.sort((a, b) => a - b); // 从小到大排序
//   console.log('nums', nums);

//   const result = [];
//   for (let i = 0; i < nums.length - 4; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     if (
//       nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] + nums[i + 4] >
//       target
//     )
//       break;

//     for (let j = i + 1; j < nums.length - 3; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//       for (let m = j + 1; m < nums.length - 2; m++) {
//         if (m > j + 1 && nums[m] === nums[m - 1]) continue;

//         let left = m + 1,
//           right = nums.length - 1;

//         while (left < right) {
//           const sum = nums[i] + nums[j] + nums[left] + nums[right];
//           if (sum === target) {
//             result.push([nums[i], nums[j], nums[m], nums[left], nums[right]]);
//             while (left < right && nums[left] === nums[left + 1]) {
//               left++;
//             }
//             while (left < right && nums[right] === nums[right - 1]) {
//               right--;
//             }
//             left++;
//             right--;
//           } else if (sum > target) {
//             right--;
//           } else {
//             left++;
//           }
//         }
//       }
//     }
//   }
//   return result;
// };

// console.log(fiveSum([1, 0, -1, 0, -2, 2], 0));
