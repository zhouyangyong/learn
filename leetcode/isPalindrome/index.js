// "A man, a plan, a canal:Pananma"
// 1. 忽略大小写 tolowercase
// 2. 特殊字符忽略 ++
// 3. left right 
var isPalindrome = function(s) {
  s = s.toLowerCase();
  var len = s.length;
  let left = 0,
      right = len - 1;
  while(left < right) {
    if(!isValid(s[left])) {
      left ++;
      continue;
    }
    if(!isValid(s[right])) {
      right --;
      continue;
    }
    if(s[left] === s[right]) {
      left ++;
      right --;
    } else {
      break;
    }
  }
  return right <= left;
} 

function isValid(char) {
  const charCode = char.charCodeAt(0);
  const isDigit = charCode >= '0'.charCodeAt(0) && charCode <='9'.charCodeAt(0);
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)
  return isDigit || isChar;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));