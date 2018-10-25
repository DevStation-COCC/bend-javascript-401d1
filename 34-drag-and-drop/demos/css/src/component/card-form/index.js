import './_card-form.scss'
import React from 'react'

class CardForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.card ? {...props.card} : {content: '', categoryId: props.categoryId}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props.card) this.setState({...props.card})
    if(props.categoryId) this.setState({categoryId: props.categoryId})
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    if(!this.props.card) this.setState({content: ''})
  }

  render() {
    return (
      <form className="card-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CardForm