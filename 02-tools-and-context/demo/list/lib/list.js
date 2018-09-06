'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  addNewItem(item){
    this[0] = item;
  }

  map(callback){
    let result = new List();
    for(let i = 0; i < this.length; i++) {
      result.addNewItem(callback(this[i], i));
    }

    return result;
  }
}