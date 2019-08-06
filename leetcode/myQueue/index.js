// 232 用栈实现队列

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this._inputStack = [];
  this._outputStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this._inputStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this._outputStack.length === 0) {
    while (this._inputStack.length > 0) {
      this._outputStack.push(this._inputStack.pop())
    }
  }
  return this._outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let num;
  if (this._outputStack.length === 0) {
    while (this._inputStack.length > 0) {
      this._outputStack.push(this._inputStack.pop())
    }
    num = this._outputStack[this._outputStack.length - 1]
    while (this._outputStack.length > 0) {
      this._inputStack.push(this._outputStack.pop())
    }
  } else {
    num = this._outputStack[this._outputStack.length - 1]
  }
  return num;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this._inputStack.length === 0 && this._outputStack.length === 0;
};

const queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop());
queue.push(4);
console.log(queue.empty());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue.empty());