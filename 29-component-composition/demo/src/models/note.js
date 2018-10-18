import uuid from 'uuid';

export default class Note {
  constructor(title, content, isEditing, isComplete){
    this.id = uuid.v4();
    this.isEditing = isEditing || false;
    this.isComplete = isComplete || false;
    this.title = title || '';
    this.content = content || '';
  }
}