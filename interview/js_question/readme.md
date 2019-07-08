# q1
js 全局执行上下文时会自动创建的两个东西：
1. this 关键字 
2. 全局对象 

new 实现原理：
  1. 创建一个空对象，构造函数中的this 指向这个空对象
  2. 这个新对象被执行[原型]连接
  3. 执行这个构造函数，属性和方法添加到this的引用的对象中
  4. 如果构造函数没有返回其他对象，那么就返回这个this，即创建的新对象，否则，返回构造函数中返回的对象

prototype 显式原型 只有函数有
__proto__ 隐式原型 任何都有


# q2 
call apply bind

this 作用域

箭头函数没有this

delete方法


# q3 深拷贝和浅拷贝 
https://juejin.im/post/5b5dcf8351882519790c9a2e
WeakMap
RegExp


# q4 闭包
闭包的原理：有权限访问其他函数的作用域的函数

1. 阻止作用域被js垃圾回收
2. 创建私有变量
3. 创建块级作用域

# q5 数组去重
Set typeOf includes map reduce