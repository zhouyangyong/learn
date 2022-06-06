// 暴力循环
// var longestPalindrome = str => {
//   let s = ''
//   for (let i = 0; i < str.length; i ++) {
//     for (let j = i + 1; j < str.length; j ++) {
//       const temp = str.slice(i, j)
//       if(temp == temp.split("").reverse().join("") && temp.length > s.length) {
//         s = temp
//       }
//     }
//   }
//   return s
// }

// console.log(longestPalindrome("asdsaaa"))


var init = str => {
  const len = str.length
  let s_new = []
  s_new[0] = '$'
  s_new[1] = '#'
  let j = 2
  for (let i = 0; i < len; i ++) {
    s_new[j++] = str[i]
    s_new[j++] = '#'
  }

  s_new[j++] = '^';
  // s_new[j] = '\0';
  let id = s_new.length
  return s_new
}

// Manacher算法
var Manacher = str => {
  const s_new = init(str)
  const len = s_new.length
  console.log(len)
  let p = [], max_len = -1, id = 0, mx = 0, centerIndex = 0
  for (i = 1; i < len; i ++) {
    if (i < mx) {
      // 回文半径 r = 2*id - i
      p[i] = Math.min(p[2*id - i], mx - i)
    } else {
      p[i] = 1
    }
    while (s_new[i - p[i]] == s_new[i + p[i]])  // 不需边界判断，因为左有 $，右有 ^
      p[i]++;
    // 我们每走一步 i，都要和 mx 比较，我们希望 mx 尽可能的远，
    // 这样才能更有机会执行 if (i < mx)这句代码，从而提高效率
    if (mx < i + p[i]) {
      id = i
      mx = i + p[i]
    }
    max_len = Math.max(max_len, p[i] - 1)
    // 更新最大回文串长度及位置
    if (max_len < p[i]) {
      console.log(max_len, p[i])
      // max_len = p[i] - 1;
      centerIndex = i;
    }
  }
  p.reduce((pre, cur, index) => {
    return pre > cur ? pre : cur
  })
  // console.log('p', p)
  return s_new.slice(centerIndex - max_len + 1, centerIndex + max_len).join('').split('#').join('')
}

// &#a#b#b#a#h#o#p#x#p#o#^
// i = 1时，p[1] = 1，s_new[i - p[1] = &，s_new[i + p[1]] = a，id = 1，mx = 2，max_len = 0
// i = 2时，p[2] = 1，s_new[i - p[2] = #，s_new[i + p[2]] = #，p[2] = 2，id = 2，mx = 4，max_len = 1
// i = 3时，p[3] = 1，s_new[i - p[3] = a，s_new[i + p[3]] = b，id = 2，mx = 3，max_len = 1
// Manacher('abbahopxpo')
console.log(Manacher('abbahopxpo'))