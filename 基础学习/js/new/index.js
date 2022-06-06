function myNew(ctor) {
  // 构造函数必须是方法才可以
  if(typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  let args = Array.prototype.slice.call(arguments, 1);
  // 创建一个新对象
  let obj = {};
  //新对象的__proto__指向构造函数的prototype,实现继承
  obj.__proto__ = ctor.prototype;
  //改变this指向，将构造函数作用域赋给新对象
  console.log('ctor', ctor)
  console.log('obj', obj)
  const result = ctor.apply(obj, args);
  console.log('result', result)
  var isObject = typeof result === 'object' && result !== null;
  var isFunction = typeof result === 'function';
  console.log('----', isObject, isFunction)
  console.log('obj', obj)
  return isObject || isFunction ? result : obj;
}


// function Person(name) {
//   this.name = name
//   this.say = function () {
//     console.log(this.name)
//   }
// }

// const p1 = myNew(Person, 'zhangsan')
// console.log(p1) //Person { name: 'zhangsan', say: [Function] }
// p1.say() //zhangsan

// function Person(name) {
//   this.name = name
//   this.say = function () {
//     console.log(this.name)
//   }
//   return 1
// }

// const p1 = myNew(Person, 'zhangsan')
// console.log(p1) //Person { name: 'zhangsan', say: [Function] }
// p1.say() //zhangsan

function Person(name) {
  this.name = name
  this.say = function () {
    console.log(this.name)
  }
  return { a: 1 }
}

const p1 = myNew(Person, 'zhangsan')
console.log(p1) //{ a: 1 }
p1.say() //p1.say is not a function


// function Person(name) {
//   this.name = name
//   this.say = function () {
//     console.log(this.name)
//   }
//   return () => console.log(1)
// }

// const p1 = myNew(Person, 'zhangsan')
// console.log(p1) //[Function]
// p1.say() //p1.say is not a function