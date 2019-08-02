function Animal(name) {
  this.name = name;
  this.sleep = function() {
    console.log(this.name + '睡着了')
  }
}

Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food);
}

// ------------原型链的继承
function Cat() {}

Cat.prototype = new Animal('cat');
// Cat.prototype.name = 'cat';

const cat = new Cat();
cat.sleep();
cat.eat('fish');
console.log(cat instanceof Animal); // true

// ------------构造函数的继承
function Dog(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}

const dog = new Dog();
console.log(dog.name);
console.log(dog instanceof Animal); // false

// ------------混合继承
function Mouse(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}

Mouse.prototype = new Animal();

// ------------寄生组合继承
function Rabbit(name) {
  Animal.call(this);
  this.name = name || 'Tom';
}

(function() {
  // 创建一个没有实例方法的类
  var Super = function() {}
  Super.prototype = Animal.prototype;
  Rabbit.prototype = new Super();
})()

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);