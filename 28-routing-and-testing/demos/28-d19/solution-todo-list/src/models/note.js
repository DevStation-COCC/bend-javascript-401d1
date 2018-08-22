import uuid from 'uuid'

class Note {
  constructor(title, content, isEditing, isComplete) {
    this.id = uuid.v1();
    this.title = title || ''
    this.content = content || ''
    this.isComplete = isComplete || false

    // TODO: the lab doesn't mention editing besides having an isEditing property.
    // what's easier, editing or deleting? deleting. editing requires changing views.
    this.isEditing = isEditing || false
  }
}

export default Note