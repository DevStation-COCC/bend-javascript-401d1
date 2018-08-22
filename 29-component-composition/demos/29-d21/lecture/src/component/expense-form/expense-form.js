import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : '',
      price : 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.app.setState(prevState => (
      {expenses: [...prevState.expenses, this.state]}))
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> create expense </button>
      </form>
    )
  }
}

export default ExpenseForm
