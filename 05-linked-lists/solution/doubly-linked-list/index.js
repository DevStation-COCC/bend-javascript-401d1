'use strict';

const Node = require('./lib/node');

class DoublyLinkedList {
  constructor() {
    this.root = null;
  }

  static fromArray(arr) {
    let list = new DoublyLinkedList();
    let current = null;

    for (let i = 0; i < arr.length; i++) {
      let node = new Node(arr[i]);
      if (i === 0) {
        list.root = node;
        current = node;
      } else {
        current.next = node;
        node.prev = current;
        current = current.next;
      }
    }

    return list;
  }

  isEmpty() {
    return this.root === null;
  }

  size() {
    let count = 0;
    let current = this.root;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.root;

    this.root.prev = node;
    this.root = node;
  }

  append(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (current.next) {
      current = current.next;
    }
    let node = new Node(value)
    node.prev = current;
    current.next = node;
  }

  remove(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.root.value === value) {
      return this.removeHead();
    } else {
      let result = null;
      let current = this.root
      while (current.next) {
        if (current.next.value === value) {
          result = removeNextNode(current);
        }
        current = current.next;
      }
      return result;
    }
  }

  removeHead() {
    let result = this.root;
    this.root = this.root.next;
    if (this.root && this.root.prev) {
      this.root.prev = null;
    }
    return result;
  }

  removeNextNode(current) {
    let result = current.next;

    // point the current node to point to the
    // node after the node we're removing.
    current.next = current.next.next;

    // make sure a node exists before accessing .prev
    if (current.next && current.next.prev) {
      // change the node that replaced the removed
      // node so it points back now to the current node.
      current.next.prev = current;
    }
    return result;
  }

  reverse() {
    if (this.isEmpty()) {
      return;
    }

    let current = this.root.next;
    let reversed = this.root;
    reversed.next = null;

    while (current) {
      let remaining = current.next;

      current.next = reversed;
      reversed.prev = current;
      reversed = current;

      current = remaining;
    }

    this.root = reversed;
    this.root.prev = null;
  }


  findMiddle(list) {
    let slow = this.root;
    let fast = this.root;
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next
    }
    return slow
  }

  findNthFromLast(n) {
    var i;
    let result = this.root;
    let offset = this.root;

    // Move one node forward so it's N steps ahead of the other.
    for (var i = 0; i < n; i++) {
      offset = offset.next
    }

    // Now walk them both taking steps together.
    // When the offset hits the end then the
    // result will be N from the end.
    while(offset.next){
      result = result.next;
      offset = offset.next
    }

    return result
  }

  findLast() {
    // start at the front, and walk to the end.
    let current = this.root;
    while (current.next) {
      current = current.next
    }
    return current;
  }

}


module.exports = DoublyLinkedList;
