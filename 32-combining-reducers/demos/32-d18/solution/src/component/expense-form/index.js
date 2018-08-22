import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.expense ? props.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : null,
      name: props.expense ? props.expense.name : '',
      categoryId: props.category ? props.category.id : '',
      price: props.expense ? props.expense.price : 0,
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange =  this.handleChange.bind(this)
    console.log('__EXPENSE_FORM_PROPS__', this.props)
  }

  // componentWillReceiveProps(nextProps) {

  // }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
    this.props.toggle()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form 
        className="expense-form"
        onSubmit={this.handleSubmit}>

        <input 
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}/>

        <input 
          type="number"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm