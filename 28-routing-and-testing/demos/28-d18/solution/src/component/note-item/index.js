import React from 'react'

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  render() {
    return (
      <section className="note-item">
        <p>Content: {this.props.note.content}</p>
        <label>Editing:
          <input 
            disabled 
            type="checkbox"
            checked={this.props.note.editing}/>
        </label>
        <label>Completed:
          <input 
            disabled
            type="checkbox"
            checked={this.props.note.completed}/>
        </label>

        <button onClick={() => this.handleDelete(this.props.note.id)}>x</button>
      </section>
    )
  }
}

export default NoteItem