import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)

    // Set default state or state given to us (therefore we can use for Update as well)
    this.state = {
      title: props.category ? props.category.title : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Same handle change as before
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  // Standard handleSubmit
  // Simply send a new state object into onComplete
  // Makes interface for form extremely lightweight
  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
  }

  render() {
    // Nothing new in here
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm