## event loop  事件队列(待执行事件队列)
异步问题
JS 是单线程 
setTimeout async promise 
async task 进入我们的event 队列 等待执行
宏任务 微任务 队列 
将回调函数加入事件队列中 task queue 执行栈 
macrotask(宏任务) 一行执行一次
  setTimeout setInterval setImmediate I/O UI rendering
microtask(微任务) 优先执行 一次执行完
  Promise process.nextTick 

C E D A B    D A 第一次的eventloop B 第二次的eventloop
1. macrotasks ['A', 'B']
2. microtask ['D']