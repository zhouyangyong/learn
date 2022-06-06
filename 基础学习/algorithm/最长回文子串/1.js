var longestPalindrome = function(s) {
  let str = '$#'
  for (let i = 0; i < s.length; i ++) {
      str += s[i] + '#'
  }
  str += '^'
  const len = str.length
  
  let mx = 0, id = 0, p = [], max_len = 0, currentIndex = 0
  for (let i = 1; i < len; i ++) {
    if (i < mx) {
      p[i] = Math.min(p[2*id - i], mx - i)
    } else {
      p[i] = 1
    }

    while(str[i - p[i]] === str[i + p[i]])
      p[i] ++;
    
    if (mx < i + p[i]) {
      mx = i + p[i]
      id = i
    }
    // max_len = Math.max(max_len, p[i] - 1)
    if (max_len < p[i]) {
      max_len = p[i]
      currentIndex = i
    }
  }
  return str.slice(currentIndex - max_len + 1, currentIndex + max_len).split('#').join('')
};

console.log(longestPalindrome('abbahopxpo'))
