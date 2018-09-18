'use strict';

const storage = require(`../lib/storage/data-store.js`);
const uuid = require('uuid/v1');


class Notes {
  constructor(title, content){
    this.id = uuid();
    this.createdOn = new Date();
    this.title = title;
    this.content = content;
  }

  save() {
    return storage.save(this);
  }
}

module.exports = Notes;