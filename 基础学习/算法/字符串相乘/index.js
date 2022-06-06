// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。(没有小数)
// num1 和 num2 都不包含任何前导零，除了数字0本身。

var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  let pos = new Array(num1.length + num2.length).fill(0);

  console.log('pos', pos);
  for (i = num1.length - 1; i >= 0; i--) {
    let n = +num1[i];

    for (j = num2.length - 1; j >= 0; j--) {
      let m = +num2[j];
      let mul = n * m;
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = mul + pos[p2];
      console.log('sum', sum);
      pos[p1] += Math.floor(sum / 10);
      console.log('pos[p1]', pos[p1]);
      pos[p2] = sum % 10;
      console.log('pos[p2]', pos[p2]);
    }
  }

  console.log('pos', pos);
  const res = pos.join('');

  console.log('res[0]', res[0] == 0);
  return res[0] === '0' ? res.slice(1) : res;
};

console.log(multiply('0', '0'));
