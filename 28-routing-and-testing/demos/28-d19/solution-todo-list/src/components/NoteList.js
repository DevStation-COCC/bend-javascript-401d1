import React, { Component } from 'react';
import NoteItem from '../components/NoteItem'

class NoteList extends Component {
  notes() {
    return this.props.notes.map((note, i) => {
      return <NoteItem note={note} key={i} destroyNote={this.props.destroyNote}></NoteItem>
    });
  }

  render() {
    return (
      <div className="note-list">
        <ul>
          {this.notes()}
        </ul>
      </div>
    );
  }
}

export default NoteList;
