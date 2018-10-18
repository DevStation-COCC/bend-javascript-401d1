import React from 'react';

import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note){
    // Add an instance of a note to our 'notes' state
    this.state.notes.push(note);

    // Set state
    this.setState({notes: this.state.notes});
  }

  removeNote(note){
    let notes = this.state.notes;
    let noteIndex = notes.indexOf(note);
    notes.splice(noteIndex, 1);

    this.setState({notes});
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <NoteForm createNote={this.addNote} />
        <NoteList notes={this.state.notes} destroyNote={this.removeNote}/>
        {/* Delete All button goes here */}
      </div>
    );
  }
}