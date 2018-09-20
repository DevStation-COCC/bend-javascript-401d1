
import storage from '../lib/storage/memory.js';
import uuid from 'uuid/v1';

class Notes{
  constructor(title, content){
    this.id = uuid();
    this.createdOn = new Date();
    this.title = title || '';
    this.content = content || '';
  }

  save(){
    return storage.save(this);
  }

  get(id){
    return storage.fetchOne(id);
  }
}

export default Notes;