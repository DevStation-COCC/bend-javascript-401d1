import React, { Component } from 'react';
import NoteCreateForm from '../components/NoteCreateForm'
import NoteList from '../components/NoteList'
import Note from '../models/note'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // initialize the array of notes only the first time the page loads.
    if (!this.state.notes) {
      this.state.notes = [
        new Note('buy milk'),
        new Note('cook dinner'),
      ]
    }

    this.createNote = this.createNote.bind(this)
    this.destroyNote = this.destroyNote.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
  }

  createNote(note) {
    // Step 1: manipulate the array by pushing a new note to it
    this.state.notes.push(note)

    // Step 2: call setState so it's actually set and rerendered properly.
    this.setState({notes: this.state.notes})
  }

  destroyNote(noteToRemove) {
    // Step 1: Modify
    let notes = this.state.notes
    notes.splice(notes.indexOf(noteToRemove), 1)

    // Step 2: Set
    this.setState({notes})
  }

  deleteAll() {
    // Step 1: Modify
    let notes = this.state.notes
    notes.splice(0, notes.length)

    // Step 2: Set
    this.setState({notes})
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <NoteCreateForm createNote={this.createNote}></NoteCreateForm>
        <NoteList notes={this.state.notes} destroyNote={this.destroyNote}></NoteList>
        <div><button onClick={this.deleteAll}>delete all</button></div>
      </div>
    );
  }
}

export default Dashboard;
