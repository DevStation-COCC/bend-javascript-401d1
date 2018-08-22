import React from 'react'
import NoteUpdateForm from '../note-update'

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleView = this.handleView.bind(this)
  }

  componentDidUpdate() {
    console.log('__ITEM_STATE__', this.state)
  }

  handleDelete(e, id) {
    e.preventDefault()
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  handleView() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <section className="note-item" onDoubleClick={this.handleView}>
        {this.state.editing === false ? 
          <section>
            <p>Content: {this.props.note.content}</p>
            <label>Editing:
              <input 
                disabled 
                type="checkbox"
                value={this.props.note.editing}/>
            </label>
            <label>Completed:
              <input 
                disabled
                type="checkbox"
                value={this.props.note.completed}/>
            </label>
            <button onClick={(e) => this.handleDelete(e, this.props.note.id)}>x</button>
          </section> :
          <NoteUpdateForm note={this.props.note} app={this.props.app}/>
        } 
      </section>
    )
  }
}

export default NoteItem