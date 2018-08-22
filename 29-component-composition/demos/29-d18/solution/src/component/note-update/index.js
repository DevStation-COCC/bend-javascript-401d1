import React from 'react'

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      content: this.props.note.content || '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if(note.id === this.props.note.id) {
          note.content = this.state.content         
        }
        return note
      })
    }))
  }

  render() {
    return (
      <form className="note-update-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">++</button>
      </form>
    )
  }
}

export default NoteUpdateForm