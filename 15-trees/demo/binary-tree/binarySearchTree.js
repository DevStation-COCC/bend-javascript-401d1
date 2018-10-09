'use strict';

const Node = require('./node/node').Node;

class BinarySearchTree {
  constructor(node){
    this.root = node;
  }

  insert(node){
    if(!this.root){
      this.root = node;
      return;
    }

    let curNode = this.root;

    while(curNode){
      if(node.value < curNode.value){
        if(!curNode.left){
          curNode.left = node;
          break;
        }else{
          curNode = curNode.left;
        }
      }else if(node.value > curNode.value){
        if(!curNode.right){
          curNode.right = node;
          break;
        }else{
          curNode = curNode.right;
        }
      }
    }
  }

  _getNumberOfChildren(node){
    if(node.left && node.right){
      return 2;
    }else if(node.left || node.right){
      return 1;
    }else{
      return 0;
    }
  }

  remove(value){
    // If our tree ONLY has a root and nothing else
    if(this._getNumberOfChildren(this.root) === 0 && value === this.root.value){
      this.root = null;
    }else{
      this._remove(this.root, value);
    }
  }

  _remove(root, value){

    if(root === null){
      return root;
    }

    if(value < root.value){
      root.left = this._remove(root.left, value);
    }else if(value > root.value){
      root.right = this._remove(root.right, value);
    }else{

      // If one child - left or right
      if(root.left === null){
        let tmp = root.right;
        root = null;
        return tmp;
      }else if(root.right === null){
        let tmp = root.left;
        root = null;
        return tmp;
      }

      // Else two children
      let tmp = this._getMinNode(root.right);
      root.value = tmp.value;
      root.right = this._remove(root.right, tmp.value);
    }

    return root;
  }

  _getMinNode(root){
    let node = root;

    while(node.left){
      node = node.left;
    }

    return node;
  }

  // remove(value){
  //   let curNode = this.root;

  //   let stack = [];

  //   // Get to node to remove...
  //   // While pushing family into a stack
  //   while(value !== curNode.value){
  //     if(value < curNode.value){
  //       stack.push(curNode);
  //       curNode = curNode.left;
  //     }else if(value > curNode.value){
  //       stack.push(curNode);
  //       curNode = curNode.right;
  //     }
  //   }

  //   //if no child
  //   if(!curNode.left && !curNode.right){
  //     if(!stack.length){
  //       curNode = null;
  //       this.root = null;
  //       return;
  //     }

  //     let parent = stack.shift();
  //     if(curNode.value < parent.value){
  //       parent.left = null;
  //       return;
  //     }else {
  //       parent.right = null;
  //       return;
  //     }
  //   }

  //   //if two children
  //   if(curNode.left && curNode.right){
  //     // get max value in curNode sub-tree
  //     let node = this._getMaxNode(curNode);
  //     // swap curNode.value with max value
  //     curNode.value = node.value;
  //     // null out max value node in sub-tree
  //     node = null;
  //   }


  //   //if curNode has one child
  //   if(curNode.left || curNode.right){
  //     // If root...
  //     if(!stack.length){
  //       if(curNode.left){
  //         this.root = curNode.left;
  //         curNode = null;
  //         return;
  //       }else{
  //         this.root = curNode.right;
  //         curNode = null;
  //         return;
  //       }
  //     }

  //     let parent = stack.shift();

  //     if(curNode.left){ // Has left but no right child
  //       if(parent.value > curNode.value) { // Left side of parent
  //         parent.left = curNode.left;
  //         curNode = null;
  //         return;
  //       }else{
  //         parent.right = curNode.left;
  //         curNode = null;
  //         return;
  //       }
  //     }else{
  //       if(parent.value > curNode.value) { // Left side of parent
  //         parent.left = curNode.right;
  //         curNode = null;
  //         return;
  //       }else{
  //         parent.right = curNode.right;
  //         curNode = null;
  //         return;
  //       }
  //     }
  //   }
  // }

  _getMaxNode(root){
    let node = root;

    while(node.right){
      node = node.right;
    }

    return node;
  }

  serialize(){
    return Buffer.from(this.preOrder());
  }

  deserialize(buffer){
    Array.from(buffer).forEach(e => {
      this.insert(new Node(e));
    });
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

exports.BinarySearchTree = BinarySearchTree;
