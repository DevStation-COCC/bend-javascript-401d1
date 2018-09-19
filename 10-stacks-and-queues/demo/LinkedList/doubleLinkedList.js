'use strict';

const dNode = require('./doubleNode.js');

const _getItemAt = Symbol('getItemAt');
const _removeHead = Symbol('removeHead');
const _removeTail = Symbol('removeTail');
const _removeMiddle = Symbol('removeMiddle');

class DoubleLL {
  constructor(){
    this.head = this.tail = null;
    this.length = 0;
  }

  append(item){
    let node = new dNode();
    node.val = item;

    if(this.length === 0){
      this.head = this.tail = node;
      this.length++;
      return node;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  prepend(item) {
    if(this.length === 0){
      return this.append(item);
    }

    let node = new dNode();
    node.val = item;

    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    this.length++;

    return node;
  }

  remove(offset) {
    if(this.length === 0){ // Nothing to remove...
      return;
    }else if(offset === 0){ // Remove head
      return this[_removeHead]();
    }else if(offset === this.length - 1){ // Remove tail
      return this[_removeTail]();
    }else{ // Remove somewhere in the middle
      return this[_removeMiddle](offset);
    }
  }

  [_removeHead](){
    let cur = this.head;
    if(this.length > 1){
      let right = cur.next;

      this.head = right;
      right.prev = cur.next = null;
    }else{
      this.head = this.tail = null;
    }

    this.length--; // Later dude

    return cur;
  }

  [_removeTail](){
    let cur = this.tail;
    let left = cur.prev;

    this.tail = left;
    left.next = null;
    cur.prev = null;

    this.length--; // Later dude

    return cur;
  }

  [_removeMiddle](offset){

    let cur = this.head;
    for(let i = 1; i <= offset; i++){
      cur = cur.next;
    }

    let right = cur.next;
    let left = cur.prev;

    right.prev = left;
    left.next = right;
    cur.next = cur.prev = null;

    this.length--; // Later dude

    return cur;
  }

  insert(offset, item){
    if(this.length < offset) this.append(item);
    else if(this.length === offset) this.prepend(item);

    let cur = this[_getItemAt](offset);

    item.prev = cur;
    cur.next = item;
    this.tail = item;
    return item;
  }

  itemAt(offset){
    if(offset === 0) return this.head;
    else if(offset === this.length - 1) return this.tail;

    return this[_getItemAt](offset);
  }

  [_getItemAt](offset){
    let cur = this.head;
    for(let i = 1; i <= offset; i++){
      cur = cur.next;
    }

    return cur;
  }

  prettyPrint(){
    if(this.length === 0) {
      console.log('Empty List!');
      return;
    }

    let cur = this.head;
    console.log(`HEAD(0): ${cur.val}`);
    for(let i = 1; i < this.length; i++){
      cur = cur.next;
      console.log(`Offset(${i}): ${cur.val}`);
    }
  }
}

module.exports = DoubleLL;