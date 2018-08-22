import React, { Component } from 'react'
import Note from '../models/note'

class NoteCreateForm extends Component {
  constructor(props) {
    super(props)

    // newItem only needs to exist within this component so it's
    // attached only to this local state.
    this.state = {
      newTitle: '',
      newContent: '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.onComplete = this.onComplete.bind(this)
  }

  handleTitleChange(e) {
    this.setState({newTitle: e.target.value});
  }

  handleContentChange(e) {
    this.setState({newContent: e.target.value});
  }

  onComplete(e) {
    e.preventDefault();

    let note = new Note(this.state.newTitle, this.state.newContent)
    this.props.createNote(note)

    // reset the title and content
    this.setState({newTitle: ''})
    this.setState({newContent: ''})
  }

  render() {
    return (
      <form onSubmit={this.onComplete} id="create-note-form">
        <label>
          Title:
          <input type="text" value={this.state.newTitle} placeholder="buy post-its"
                onChange={this.handleTitleChange} />
        </label>
        <label>
          Content:
          <input type="text" value={this.state.newContent} placeholder="buy post-its"
                onChange={this.handleContentChange} />
        </label>
        <button type="submit">add item</button>
      </form>
    );
  }
}

export default NoteCreateForm;
