Array.prototype.$push = function (...arg) {
  console.log('数组发生变化了');
  console.log('this', this);
  return this.push(...arg);
}

var arr = [0, 1, 2];

arr.$push(3);

console.log(arr);

var originPop = Array.prototype.pop;
Array.prototype.pop = function () {
  console.log('数组发生变化了 pop');
  originPop.apply(this, arguments);
}

arr.pop()
console.log(arr);

let arrMethods = ['push', 'pop', 'shift', 'unshift', 'splice'];
arrMethods.forEach((methodName) => {
  let originMethod = Array.prototype[methodName];
  Array.prototype[methodName] = function () {
    console.log('改变了');
    return originMethod.apply(this, arguments);
  }
});

arr.unshift(9);
console.log(arr);