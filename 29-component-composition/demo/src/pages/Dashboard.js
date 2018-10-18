import React from 'react';

import NoteForm from '../components/NoteForm/NoteForm';
import NoteList from '../components/NoteList';
import Note from '../models/note';
import Modal from '../components/Modal/Modal';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [new Note('stock title', 'stock content')],
      isWelcomed: false,
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Lifecycle Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  componentDidUpdate() {}
  componentWillUpdate() {}

  componentDidMount(){
    console.log('__DASHBOARD__: componenetDidMount');
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Component Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

  deleteAll() {
    // Step 1: Modify
    let notes = this.state.notes;
    notes.splice(0, notes.length); // GOTTA DELETE EM ALL...POKEMON

    // Step 2: Set
    this.setState({notes});
  }

  render() {
    let modal = <React.Fragment></React.Fragment>;

    if(!this.state.isWelcomed){
      modal = (
        <Modal close={() => this.setState({isWelcomed: !this.state.isWelcomed})}>
          <h1>Welcome!</h1>
          <p>Current Note Count: {this.state.notes.length}</p>
        </Modal>
      );
    }

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        {modal}
        <NoteForm createNote={this.addNote} />
        <NoteList notes={this.state.notes} destroyNote={this.removeNote}/>
        <div><button onClick={this.deleteAll}>delete all</button></div>
      </div>
    );
  }
}