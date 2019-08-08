// 找出出现次数最多的字符
var str = 'abcdeffggghhhhiiiii'

function getMax(str) {
  let hash = {}, // 哈希表
      max = 0,
      maxStr;
  for(let i = 0; i < str.length; i ++) {
    // hash 有 i 吗 ？ 有加1 没有 1
    let char = str[i]
    if(!hash[char]) {
      // 没有
      hash[char] = 1;
    } else {
      hash[char] ++;
    }
    if(hash[char] > max) {
      max = hash[char];
      maxStr = char;
    }
  }
  return maxStr;
}

console.log(getMax(str));