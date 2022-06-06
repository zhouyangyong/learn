// https://blog.csdn.net/qq_33692349/article/details/103943242
// 基本类型：保存在栈内存中，因为这些类型在内存中分别占有固定大小的空间，通过按值来访问。基本类型一共有6种：Undefined、Null、Boolean、Number 、String和Symbol
// 引用类型：保存在堆内存中，因为这种值的大小不固定，因此不能把它们保存到栈内存中，但内存地址大小的固定的，因此保存在堆内存中，在栈内存中存放的只是该对象的访问地址。
//         当查询引用类型的变量时， 先从栈中读取内存地址， 然后再通过地址找到堆中的值。对于这种，我们把它叫做按引用访问。

var tmp = 'a';
function f() {
  console.log(tmp); //undefined
  tmp = 'hello world';
  console.log(tmp);
}
f();
console.log('tmp', tmp);

let a = { n: 1 };
let b = a;
a.x = a = { n: 2 }; // 赋值语句顺序不用多说从右到左执行，但在代码中有一个a.x，由于 . 的优先级比 = 高会优先执行
console.log(a.x); // undefined
console.log(b); // { n: 1, x: { n: 2 } }
console.log(a); // { n: 2 }
