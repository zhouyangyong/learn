// let str = '123';
// let str2 = '456';
// console.log(+str + (+str2));

var num1 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
var num2 = '99958321098765432102222223333211112222222222222222222';

function addTwoNumbers (str1, str2) {
    // 表达清除了 字符串 不能相加
    // 新的数据结构来打理它 [] 存储每一位的相加，进位
    // 字符串有 index
    // join 方法 
    let carry = 0, // 是否有进位
        len1 = str1.length, // 数的长度
        len2 = str2.length, //数的长度
        arr = []; // 位相加的存储
    // 像写加法
    // 遍历数组的每一位呢？
    var max = Math.max(len1, len2); // 最长的位数
    for (let i = len1 - 1, j = len2 - 1, n = max - 1; n >= 0; n--, i--, j-- ) {
        var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;
        if(sum >= 10) {
            carry = 1;
            arr.push(sum - 10);
        } else {
            carry = 0;
            arr.push(sum);
        }
    }

    if (carry > 0) {
        arr.push(carry).join('');
    }

    return arr.reverse();
}

console.log(addTwoNumbers(num1, num2));