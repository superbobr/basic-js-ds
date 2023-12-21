const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    if (this.start) {
      let index = this.start;
      while (index.next) {
        index = index.next;
      }
      index.next = new ListNode(value);
    } else {
      this.start = new ListNode(value);
    }
    ++this.size;
  }

  dequeue() {
    let index = this.start;
    this.start = index.next;
    --this.size;
    return index.value;
  }
}

module.exports = {
  Queue,
};
