// function Person(name) {
//   this.name = name;
// }

// let p = new Person('wn');
// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype  
// Function.__proto__ = Object.prototype

// var foo = {},
//   F = function () { };
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a) // valA
// console.log(foo.b) // undefined
// console.log(F.a) // valA
// console.log(F.b) // valB

// function Person(name) {
//   this.name = name;
//   // return {}
//   return null
// }
// function Student() {

// }
// Student.prototype = Person.prototype // 继承
// Student.prototype.constructor = Student

// let stu = new Person('wn');
// let stu = new Student('wn');
// console.log('stu', stu)

// console.log(stu instanceof Person);

// 构造函数不需要返回值，使用new来创建时，如果return的是非对象，会忽略返回值，
// 如果是对象，则返回该对象(return null 也会忽略返回值)

// for (var i = 0; i < 10; i++) {
//   return function () {
//     setTimeout(() => {
//       console.log(i)  // 打印10个10
//     }, 0)
//   }
// }

// for(let i = 0; i < 10; i ++) {
//   setTimeout(() => {
//     console.log(i) // 0~9
//   }, 0)
// }

// let 每次循环生成一个封闭的块级作用域和setTimeout绑定，
// var每次循环会覆盖掉上一次的作用域

// let in 迭代 let of 的区别
// Array.prototype.method = function () {
//   console.log('tsn')
// }
// var myArr = [1, 2, 3, 4, 5, 6, 7]
// myArr.name = 'mm'
// for (let index of myArr) {
//   console.log(index);
// }

// for (let index in myArr) {
//   console.log(myArr[index]);
// }

// for in 
// 1. index 是索引为字符串型数字，不能进行几何运算
// 2. for in 遍历的顺序有可能不是按照实际数组的内部的顺序
// 3. 使用 for in 会遍历数组所有的可枚举属性，包括原型
// for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引 (键名)，而for of 遍历的是数组的元素
// for of 遍历的只是数组的元素，而不包括数组的原型属性和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [8, 11, 10]]]
let oArr = [1, 2, 3, 4, 5, 6, 7, 8, 11, 10]

// function outputArr(arr) {
//   var result = [];
//   for(let item of arr) {
//     if(Array.isArray(item)) {
//       // outputArr(item)
//       result = result.concat(outputArr(item))
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

function outputArr(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? outputArr(cur) : cur)
  }, [])
} 

console.log(outputArr(gArr));