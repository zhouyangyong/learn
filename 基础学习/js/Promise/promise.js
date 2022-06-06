const PENDING = 'PENDING' // 等待状态
const FULFILLED = 'FULFILLED' // 成功状态
const REJECTED = 'REJECTED' // 失败状态

let resolvePromise = (promise2, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现，用一个类型错误，结束promise
  if(promise2 === x) {
    return reject(new TypeError('chaining cycle detected for promise #<Promise>'))
  }

  let called;
  // 后续的条件要严格判断，保证代码能和别的库一起使用
  if((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, y => { // 根据promise的状态决定是成功还是失败
          if(called) return
          called = true
          // 递归解析的过程（因为可能promise中还有promise）
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if(called) return
          called = true
          reject(r)
        })
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果 
        resolve(x)
      }
    } catch(err) {
      if(called) return
      called = true
      reject(err)
    }
  } else {
    // 如果x是个普通的值就直接返回 reslove 作为结果
    resolve(x);
  }
}

class MyPromise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING
    // 存放成功状态的值，默认为undefined
    this.value = undefined
    // 存放失败状态的值，默认为undefined
    this.reason = undefined
    // 存放成功的回调
    this.onResolvedCallbacks = []
    // 存放失败的回调
    this.onRejectedCallbacks = []

    let resolve = value => {
      // 状态为PENDING才可以更新状态，防止executor中调用了两次resolve/reject方法
      if(this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = reason => {
      if(this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者  
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // 包含一个then方法，并接收两个参数onFulfilled、onRejected
  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    let promise2 = new MyPromise((resolve, reject) => {
      if(this.status === FULFILLED) {
        // 由于原生的 Promise 是V8引擎提供的微任务，我们无法还原V8引擎的实现，所以这里使用 setTimeout 模拟异步，所以原生的是微任务，这里是宏任务。
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject);
          } catch(err) {
            reject(err)
          }
        }, 0)
      }
      
      if(this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject);
          } catch(err) {
            reject(err)
          }
        }, 0)
      }

      if(this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch(err) {
              reject(err)
            }
          }, 0)
        })

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch(err) {
              reject(err)
            }
          }, 0)
        })
      }
    })
    
    return promise2
  }

  catch(errorCallback) {
    // 相当于一个没有成功的 then。
    return this.then(null, errorCallback)
  }

  // finally 表示不是最终的意思，而是无论如何都会执行的意思。
  // 如果返回一个 promise 会等待这个 promise 也执行完毕。如果返回的是成功的 promise，会采用上一次的结果；如果返回的是失败的 promise，会用这个失败的结果，传到 catch 中。
  finally(callback) {
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value)
    }, reason => {
      return MyPromise.resolve(callback()).then(() => { throw reason })
    })
  }
  
  // Promsie.reslove
  static resolve(value) {
    //如果传入的值是promise 就直接返回，否则手动创建promise对象并返回
    if(value instanceof MyPromise) return value
    return new MyPromise((resolve) => resolve(value))
  }

  // Promsie.reject
  static reject(reason){
    return new Promise((resolve,reject)=>{
      reject(reason);
    })
  }

  // promise.all 是解决并发问题的，多个异步并发获取最终的结果（如果有一个失败则失败）。
  static all(values) {
    if(!Array.isArray(values)) {
      const type = typeof values
      return new TypeError(`TypeError: ${type} ${values} is not iterable`)
    }

    return new MyPromise((resolve, reject) => {
      let resultArr = []
      let orderIndex = 0
      const processResultByKey = (value, i) => {
        resultArr[i] = value
        if(++orderIndex === values.length) {
          resolve(resultArr)
        }
      }

      for (let i =0; i < values.length; i ++) {
        let value = values[i]
        if(value && value.then === 'function') {
          value.then((value) => {
            processResultByKey(value, i)
          }, reject)
        } else {
          processResultByKey(value, i)
        }
      }
    })
  }

  // Promise.race 用来处理多个请求，采用最快的（谁先完成用谁的）。
  static race (promises) {
    return new MyPromise((resolve, reject) => {
      // 一起执行就是for循环
      for (let i = 0; i < promises.length; i++) {
        let val = promises[i];
        if (val && typeof val.then === 'function') {
          val.then(resolve, reject);
        } else { // 普通值
          resolve(val)
        }
      }
    });
  }
}

// const promise = new Promise((resolve, reject) => {
//   // resolve('成功');
//   reject('失败')
// }).then(
//   (data) => {
//     console.log('success', data)
//   },
//   (err) => {
//     console.log('faild', err)
//   }
// )

const promise = new MyPromise((resolve, reject) => {
  // 传入一个异步操作
  setTimeout(() => {
    resolve('成功');
  },1000);
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)
