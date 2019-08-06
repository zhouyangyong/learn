let arr = [0, 1, 2, 3];

let newArr = new Proxy(arr, {
  get: function (target, key, receiver) {
    console.log('get', key);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log('set', value);
    return Reflect.set(target, key, value, receiver);
  }
});

// newArr[0]
newArr.push(9)
// 取到原来的长度
// [len] = '9'
// 改变原来的数组长度

// console.log(newArr);