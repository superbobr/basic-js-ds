const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(element) {
    let length = this.length++;
    this.data[length] = element;
  }

  pop() {
    let length = this.length;
    let deleted = this.data[length - 1];
    delete this.data[length - 1];
    this.length--;
    return deleted;
  }

  peek() {
    return this.data[this.length - 1];
  }
}

module.exports = {
  Stack,
};
