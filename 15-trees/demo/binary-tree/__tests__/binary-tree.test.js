'use strict';

const BinarySearchTree = require('../binarySearchTree');
const Node = require('../node/node');

describe('Binary Search Tree', () => {

  let tree = null;

  beforeAll(() => {
    let root = new Node(42);
    let four = new Node(4);
    let five = new Node(5);
    let seven = new Node(7);
    let fifty = new Node(50);
    let fiftyfive = new Node(55);
    let seventyseven = new Node(77);

    root.left = five;
    root.right = fiftyfive;

    five.left = four;
    five.right = seven;

    fiftyfive.left = fifty;
    fiftyfive.right = seventyseven;


    tree = new BinarySearchTree(root);

  });

  // Root-Left-Right
  it('preOrder()', () => {
    let expected = [42, 5, 4, 7, 55, 50, 77];
    let actual = tree.preOrder();
    expect(actual).toEqual(expected);
  });

  // Left-Right-Root
  it('postOrder()', () => {
    let expected = [4, 7, 5, 50, 77, 55 ,42];
    let actual = tree.postOrder();
    expect(actual).toEqual(expected);
  });

  // Left-Root-Right
  it('inOrder()', () => {
    let expected = [4, 5, 7, 42, 50, 55, 77];
    let actual = tree.inOrder();
    expect(actual).toEqual(expected);
  });

});
