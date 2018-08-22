'use strict';

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  preOrder() {

    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // Left - Right -Root
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  // Left - Root - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

}

module.exports= BinaryTree;
