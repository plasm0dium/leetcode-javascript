/**
 * Initialize your data structure here.
 */

const MyQueue = function() {
    this.enqueue = [];
    this.dequeue = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.enqueue.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.enqueue.length > 1) {
      this.dequeue.push(this.enqueue.pop());
    }

    const popVal = this.enqueue.pop();

    while (this.dequeue.length > 0) {
      this.enqueue.push(this.dequeue.pop());
    }

    return popVal;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.enqueue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.dequeue.length + this.enqueue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
