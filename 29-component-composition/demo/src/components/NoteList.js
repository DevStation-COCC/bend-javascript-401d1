import React from 'react';
import NoteItem from '../components/NoteItem';

export default class NoteList extends React.Component {

  notes(){
    return this.props.notes.map((note) => {
      return <NoteItem note={note} key={note.id} destroyNote={this.props.destroyNote} />;
    });
  }

  render() {
    let content;

    content = <ul>{this.notes()}</ul>;

    return (
      <div className="note-list">
        {content}
      </div>
    );
  }
}