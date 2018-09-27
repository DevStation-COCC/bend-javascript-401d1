'use strict';

class BinarySearchTree {
  constructor(node){
    this.root = node;
  }

  // root - left - right
  // root means "push value into array"
  preOrder(){
    let results = [];

    let _walk = node => {
      results.push(node.value); // root
      if(node.left) _walk(node.left); // left
      if(node.right) _walk(node.right); // right 
    };

    _walk(this.root);

    return results;
  }

  // left - right - root
  postOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left); // left
      if(node.right) _walk(node.right); // right 
      results.push(node.value); // root
    };

    _walk(this.root);

    return results;
  }

  // left - root - right
  inOrder(){
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left); // left
      results.push(node.value); // root
      if(node.right) _walk(node.right); // right 
    };

    _walk(this.root);

    return results;

  }

}

exports.modules = BinarySearchTree;
