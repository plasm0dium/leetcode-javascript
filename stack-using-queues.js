/**
 * Initialize your data structure here.
 */

const MyStack = function() {
    this.enqueue = [];
    this.dequeue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.enqueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.enqueue.length > 1) {
      this.dequeue.push(this.enqueue.pop());
    }

    const elm = this.enqueue.pop();
    this.enqueue = this.dequeue;
    this.dequeue = [];

    return elm;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.enqueue[this.enqueue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.enqueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
