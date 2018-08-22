import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="note-list">
        {this.props.notes.map(note => <NoteItem key={note.id} note={note} app={this.props.app}/>)}
      </section>
    )
  }
}

export default NoteList