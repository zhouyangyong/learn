- JS 垃圾回收是自动的
- 回收内存 
  function 局部变量
  跨页面时
1. 可达性 作为评判的依据
  显而易见，因为一些原因不可被删除
  - 全局变量（污染空间）不会删除
  - 当前嵌套调用链上的其他函数的变量和参数
    这些称为根
2. 如果引用或引用链可以从根访问任何其他属性，则认为该值课访问，不可被删除
  let user = {
    name: 'John'
  }
  global
    |
    Object
    name: 'John'
    user 是全局变量，= 引用式赋值
      name 基础属性 字符串类型的JOHN
    user = null;  // 触发一次垃圾回收

  let user = {
    name: 'John'
  }
  let admin = user;
      global
    admin   user
      Object...
    user = null; // 垃圾无法回收