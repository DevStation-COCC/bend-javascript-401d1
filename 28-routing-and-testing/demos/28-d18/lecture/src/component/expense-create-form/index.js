import React from 'react'

class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      price: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleExpenseCreate(this.state)
  }

  render() {
    return (
      <div className='expense-create-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange} />

          <input 
            type=''
            name='price'
            value={this.state.price}
            onChange={this.handleChange} />

          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default ExpenseCreateForm