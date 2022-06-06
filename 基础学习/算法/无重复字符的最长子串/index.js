const str = 'abcbcbb';

var lengthOfLongestSubstring = function (s) {
  let i = 0,
    arr = [],
    max = 0;
  while (i < s.length) {
    console.log('arr---', arr);
    if (arr.indexOf(s[i]) === -1) {
      arr.push(s[i]);
    } else {
      arr.shift();
      continue;
    }
    console.log('arr', arr);
    max = Math.max(max, arr.length);
    i++;
  }
  return max;
};

console.log(lengthOfLongestSubstring(str));
