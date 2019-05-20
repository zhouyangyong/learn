function MyPromise(callback) {
    var self = this;
    // 记录状态null为pending, true为resolve, false为reject
    var state = null;
    // 记录resolve的参数
    var param = null;
    // then方法返回的promise对象的resolve和reject
    var nextResolve = null;
    var nextReject = null;
    // 记录then方法的参数，onFulfilled 和 onReject
    var asynconFulfilled = null;
    var asynconReject = null; 

    // 执行并改变promise对象的状态
    callback(resolve,reject);

    // then 方法
    self.then = function(onFulfilled, onReject) {
        // 返回一的新的promise对象
        return new self.constructor(function(resovle, reject) {
            // 判断异步代码是否执行完毕 (是否resolve或者reject)
            // 若执行完毕，就在then方法里面立即执行，否则就将参数记录下来，等待state就绪，再执行***函数
            if(state === true) {
                doAsynconFulfilled(onFulfilled, resolve, reject);
            } else if(state === false) {    
                doAsynconRejected(onReject, resolve, reject);
            } else {
                nextResolve = resovle;
                nextReject = reject;
                asynconFulfilled = onFulfilled;
                asynconReject = onReject;
            }
        })
    }
    // resolve方法
    function resolve(data) {
        state = true;
        param = data;
        if(nextResolve) {
            doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject);
        }
    }
    // reject方法
    function reject(err) {
        state = false;
        param = err;
        if(nextReject) {
            doAsynconRejected(asynconReject, nextResolve, nextReject);
        }
    }

    function doAsynconFulfilled(onFulfilled, resolve, reject) {
        window.setTimeout(function() {
            // 判断onFulfilled是否为function，不是则忽略
            if(typeof onFulfilled === 'function') {
                // 执行onFulfilled方法获取返回值promise()
                var promise = onFulfilled(param);
                // 如果promise为undefined执行if
                // 如果promise为MyPromise对象，执行else if里面的东西
                // 如果promise为非MyProise对象，执行else 
                if(promise === undefined) {
                    resolve(param);
                } else if (promise.constructor === self.constructor) {
                    // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象
                    // 的状态执行resolve或者reject
                    promise.then(function(param) {
                        resolve(param)
                    }, function(param) {
                        reject(param);
                    })
                } else {
                    // 执行then方法返回对象的resolve
                    resolve(promise)
                }
            } else {
                // 执行then方法返回对象的resolve
                resolve(param);
            }
        }, 0)
    }
    function doAsynconRejected(onReject, resolve, reject) {
        window.setTimeout(function() {
          if (onReject === 'function') {
            var promise = onReject(param)
            if (promise === undefined) {
              reject(param)
            } else if (promise.constructor === self.constructor) {
              promise.then(function(param) {
                resolve(param)
              }, function(param) {
                reject(param)
              })
            } else {
              reject(promise)
            }
          } else {
            reject(param)
          }
        }, 0)
    }
}