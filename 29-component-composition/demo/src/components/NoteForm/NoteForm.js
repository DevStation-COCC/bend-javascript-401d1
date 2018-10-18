import React from 'react';
import Note from '../../models/note';

export default class NoteForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      content: '',
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  onComplete(e) {
    e.preventDefault();

    // Create a Note based on form input
    let note = new Note(this.state.title, this.state.content);

    // Use Dashboard's addNote to add a Note to our App State
    this.props.createNote(note);

    this.setState({title: '', content: ''});
  }

  render() {
    return (
      <form onSubmit={this.onComplete} id="create-note-form">
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} placeholder="buy post-its" onChange={this.handleChange} />
        </label>
        <label>
          Content:
          <input type="text" name="content" value={this.state.content} placeholder="NEED MOAR POST-ITS ASAP" onChange={this.handleChange} />
        </label>
        <button type="submit">Add item</button>
      </form>
    );
  }
}