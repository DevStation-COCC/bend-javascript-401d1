'use strict';

// Models should offload their data storage to another module/system.
// Here, we'll be using a custom data store module of our own creation
import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

class People{

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.name = config && config.title || '';
    this.address = config && config.address || '';
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default People;
