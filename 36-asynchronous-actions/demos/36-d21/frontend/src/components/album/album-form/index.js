import React from 'react'

class AlbumForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    // this.state = {
    //   editing: false,
    //   album: this.props.album
    //     ? this.props.album
    //     : {name: ''},
    // }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
  }

  render() {
    return (
      <form className="album-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Bloom"
          value={this.state.name}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AlbumForm
