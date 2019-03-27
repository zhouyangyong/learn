## 箭头函数 怎么用
只有一个参数时可以省略 () 
只有一条语句的时候可以省略 {} return

## 注意
参数箭头之间不能换行
返回一个对象时候

## arguments
- 所有函数里面(除了箭头函数之外)都可以用的变量
- [arg1, arg2, arg3]

## 区别
1. 箭头函数不支持重复命名形参,普通函数可以
function fun1(a, a) {
    console.log(arguments);
}
fun1(1,2);
var arrow = (a, a) => {
    console.log(a);
}
arrow(1,2);
2. 箭头函数不能使用call apply 等方法改变this
3. 箭头函数没有 this 它的 this 指向定义时所处的上下文(外部函数)的this.
4. 箭头函数没有原型对象 .prototype
5. 箭头函数不能作为构造函数
6. 箭头函数没有 arguments

## new target
- ES6 引进的 返回 new 作用的那个构造函数(构造函数之间)