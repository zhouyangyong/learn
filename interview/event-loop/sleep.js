// function sleep(num) {
//   var now = new Date();
//   var exitTime = now.getTime() + num;
//   while(true) {
//     now = new Date();
//     if(now.getTime() > exitTime) return
//   }
// }

// console.log(1);
// console.log(2);
// sleep(2000);
// console.log(3);

function MyPromise(constructor) {
  let self = this;
  self.status = "pending"; // 初始化状态
  self.value = undefined; // 定义一个resolve时候的状态
  self.reason = undefined; // 定义一个reject时候的状态

  function resolve(value) {
    if(self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    if(self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  // 捕获异常
  try {
    constructor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  let self = this;
  switch(self.status) {
    case "resolved": 
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
}

var p = new MyPromise(function(resolve, reject) {
  resolve(1);
})

p.then((res) => {
  console.log(res)
});