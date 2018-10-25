import React from 'react'
import ExpenseForm from '../expense-form'

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseEdit: false,
    }
    this.toggleExpenseEdit = this.toggleExpenseEdit.bind(this)
  }

  toggleExpenseEdit() {
    this.setState({expenseEdit: !this.state.expenseEdit})
  }

  render() {
    return (
      <section>
        {!this.state.expenseEdit ?
          <div>
            <button onClick={() => this.props.actions.expenseDelete(this.props.expense)}>x</button>
            <button onClick={this.toggleExpenseEdit}>edit</button>
            <p>{this.props.expense.name}: <span>{this.props.expense.price}</span></p>
          </div> :
          <ExpenseForm
            onComplete={this.props.actions.expenseUpdate}
            buttonText="updated expense"
            category={this.props.category}
            expense={this.props.expense}
            toggle={this.toggleExpenseEdit} />
        }
      </section>
    )
  }
}

export default ExpenseItem