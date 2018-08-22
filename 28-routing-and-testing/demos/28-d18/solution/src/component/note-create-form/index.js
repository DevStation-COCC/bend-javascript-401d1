import React from 'react'
import uuid from 'uuid/v4'

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uuid(),
      content: '',
      editing: true,
      completed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, this.state]
    }))
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  render() {
    return (
      <form className="note-create-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">+</button>
      </form>
    )
  }
}

export default NoteCreateForm