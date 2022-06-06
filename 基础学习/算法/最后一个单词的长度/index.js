// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

var lengthOfLastWord = function (s) {
  // const arr = s.split(' ');
  // let last = arr.pop();
  // while (!last.length) {
  //   last = arr.pop();
  // }
  // return last.length;

  // trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
  // trim() 方法不会改变原始字符串。
  // trim() 方法不适用于 null, undefined, Number 类型
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
