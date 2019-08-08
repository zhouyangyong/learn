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


# q6 防抖节流

# q7 instanceof 原理

# q8 事件委托

# q9 事件流

clientHeight：表示的是可视区域的高度，不包含border和滚动条
offsetHeight：表示可视区域的高度，包含了border和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
clientTop：表示边框border的厚度，在未指定的情况下一般为0
scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

# q10 类的创建和继承

# q11 click 再ios手机上有300ms 延迟，原因即解决方法
  1. <meta name="viewport" content="width=device-width, initial-scale=none">
  2. FastClick, 其原理是：检测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真是发出的事件阻断

# localStorage sessionStorage Cookie
  Cookie：数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器之间来回传递，而SessionStorage和localStorage不会自动把发给服务器，仅在本地缓存。cookie还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小只有4K左右

  sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存

  localStorage：在所有的同源窗口都是共享的，cookie也是在同源窗口中可以共享的，            localStorage的大小在5M左右 

# q11 立即执行函数
  1. 不必为函数命名，避免了污染全局变量
  2. 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量
  3. 封装变量

#  浏览器的重绘的回流
  浏览器渲染页面的过程：
    1. 解析html，生成DOM树，生成CSSOM树
    2. 将DOM树和CSSOM树结合生成render树
    3. 回流：根据生成的render树，进行回流，得到节点的几何信息
    4. 重绘：根据render树和回流得到的信息，得到节点的绝对像素
    5. 将像素发给GPU，展示在页面上

# vue子组件是否能修改接受到的props里面的值
  不能
  为了保证数据的单向流动，便于数据的追踪，避免数据混乱