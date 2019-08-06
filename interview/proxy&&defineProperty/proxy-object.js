var obj = {

};

let newObj = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log('get', key);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log('set', key);
    return Reflect.set(target, key, value, receiver);
  },
  deleteProperty: function(target, property) {
    console.log('delete', property);
    return Reflect.deleteProperty(target, property);
  },
  has: function(target, propKey) {
    console.log('has', propKey);
    return Reflect.has(target, propKey);
  }
})

newObj.a = 1;
newObj.b = 2;
delete newObj.a;
console.log('b' in newObj)