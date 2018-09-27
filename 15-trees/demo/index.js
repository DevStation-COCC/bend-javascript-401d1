'use strict';

const BinarySearchTree = require('./binary-tree/binarySearchTree');
const Node = require('./binary-tree/node/node');


/*
        42 
      /     \
    5       55
    / \     /  \
  4   7  50    77
*/

// do stuff
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
let bst = new BinarySearchTree(root);

console.log('*** PreOrder ***');
console.log(bst.preOrder());

console.log('*** InOrder ***');
console.log(bst.inOrder());

console.log('*** PostOrder ***');
console.log(bst.postOrder());
