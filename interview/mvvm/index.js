const a = {
  b: 1
};

function b() {
  console.log('a的值发生改变');
}

function bindData() {
  Object.keys(a).map(key => {
    let v = a[key];
    Object.defineProperty(a,key, {
      get () {
        console.log('你在读取a里面的值')
        return v
      },
      set (newA) {
        v = newA
        b();
      }
    })
  })
}

bindData();

a.b = 2;

console.log(a.b);