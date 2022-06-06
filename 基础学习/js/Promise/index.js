// Promise 的四个状态
// 1、Pending：初始状态，异步操作仍在进行中
// 2、Fulfilled：操作成功，它调用.then回调
// 3、Rejected：操作失败，它调用.catch或.then的第二个参数（如果有）
// 4、Settled：这是Promise的最终状态。promise已经死亡了，没有别的办法解决或拒绝了。.finally方法被调用。

// Promise的实例方法： then catch finally
// Promise的类方法： all reject resolve race

// Promise 实现 简易版
function Promise(executor) {
  const self = this;
  self.status = 'pedding'; // 初始状态
  self.value = undefined; // 成功的返回值
  self.reason = undefined; // 失败的原因

  function resolve(value) {
    if (self.status === 'pedding') {
      self.status = 'resolved';
      self.value = value;
    }
  }

  function reject(reason) {
    if (self.status === 'pedding') {
      self.status = 'rejected';
      self.reason = reason;
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e); // 捕获时发生异常，就直接失败
  }
}

Promise.prototype.then = function (onFufiled, onRejected) {
  let self = this;
  if (self.status === 'resolved') {
    onFufiled(self.value);
  }
  if (self.status === 'rejected') {
    onRejected(self.reason);
  }
};
