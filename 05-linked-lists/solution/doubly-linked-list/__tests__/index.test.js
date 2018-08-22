'use strict'

const DoublyLinkedList = require('../index.js');
const Node = require('../lib/node.js');

describe('testing singlyLinkedList', function(){
  it('new DequeueNode should create a node', () => {
    let node = new Node(4);
    expect(node.value).toEqual(4);
    expect(node.next).toEqual(null);

    let head = new Node(3, node);
    expect(head.value).toEqual(3);
    expect(head.next).toEqual(node);
  });

  it('DoublyLinkedList.fromArray should return a linked list', () => {
    let list = DoublyLinkedList.fromArray([1,2,3,4])
    expect(list.root.next.prev).toEqual(list.root)
    expect(list.root.value).toEqual(1)
    expect(list.root.next.value).toEqual(2)
    expect(list.root.next.next.value).toEqual(3)
    expect(list.root.next.next.next.value).toEqual(4)
  })

  it('list.prepend(node) should return a list with node as head', () => {
    let list = DoublyLinkedList.fromArray([0, 4, 5])
    list.prepend(-1);
    expect(list.root.value).toEqual(-1);
    expect(list.root.next.value).toEqual(0);
    expect(list.root.next.prev).toEqual(list.root);
  })

  it('list.append(value), should append node to list', () => {
    let list = new DoublyLinkedList()
    list.append(4);
    expect(list.root.value).toEqual(4);
    expect(list.root.next).toEqual(null);

    list.append(5);
    expect(list.root.next.value).toEqual(5);
    expect(list.root.next.next).toEqual(null);

    list.append(6);
    expect(list.root.next.next.value).toEqual(6);
    expect(list.root.next.next.next).toEqual(null);
  });

  it('list.remove(value) should remove from single-node list', () => {
    let list = new DoublyLinkedList();
    list.append(1);
    list.remove(1);

    expect(list.root).toBe(null);
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
  });

  if ('list.remove(value) should remove from middle of list', () => {
      let list = DoublyLinkedList.fromArray([1,2,3,4,5]);
      list.remove(3);

      expect(list.size()).toBe(4);
      expect(list.root.next.value).toBe(2);
      expect(list.root.next.next.value).toBe(4);

      let two = list.root.next.next;
      let four = list.root.next.next.next;
      expect(four.prev).toBe(two);
    });

  if ('list.remove(value) should remove from end of list', () => {
      let list = DoublyLinkedList.fromArray([1,2,3]);
      list.remove(3);

      expect(list.size()).toBe(4);
      expect(list.root.next.value).toBe(2);
      expect(list.root.next.next).toBe(null);
    });

  it('list.reverse() should reverse the list', () => {
    let list = DoublyLinkedList.fromArray([4, 5, 6])
    let result = list.reverse()

    let six = list.root
    let five = list.root.next
    let four = list.root.next.next

    expect(six.next).toBe(five);
    expect(six.prev).toBe(null);

    expect(five.next).toBe(four);
    expect(five.prev).toBe(six);

    expect(four.next).toBe(null);
    expect(four.prev).toBe(five);

    expect(list.root.prev).toBe(null)
    expect(list.root.value).toEqual(6)
    expect(list.root.next.value).toEqual(5)
    expect(list.root.next.next.value).toEqual(4)
    expect(list.root.next.next.next).toBe(null)
  })

  it('list.findMiddle() should return middle node', () => {
    let list = DoublyLinkedList.fromArray([4, 5, 6]);
    let middle = list.findMiddle();
    expect(middle.value).toEqual(5);
    expect(middle.prev.value).toEqual(4);
    expect(middle.next.value).toEqual(6);

    list = DoublyLinkedList.fromArray([3, 4, 5, 6]);
    middle = list.findMiddle();
    expect(middle.value).toEqual(5);
    expect(middle.prev.value).toEqual(4);
    expect(middle.next.value).toEqual(6);
  });

  it('list.findLast() should return last node', () => {
    let list = DoublyLinkedList.fromArray([3, 4, 5, 6]);
    let result = list.findLast();
    expect(result.value).toEqual(6);
  });

});
