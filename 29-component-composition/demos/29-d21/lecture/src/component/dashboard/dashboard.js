import React from 'react'
import Modal from '../modal'
import {renderIf} from '../../lib/utils'
import ExpenseForm from '../expense-form/expense-form'
import ExpenseList from '../expense-list/expense-list'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      budget: 444,
      showErrors: false,
    }

    this.getApp = this.getApp.bind(this)
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render() {
    let totalSpend = this.state.expenses.reduce((a, b) => a + parseInt(b.price), 0)
    let remainingBudget = this.state.budget - totalSpend

    return(
      <div>
        <h1>Welcome to the Expense Tracker</h1>

        <aside className="budget-info">
          <p>Total Budget: {this.state.budget}</p>
          <p>Total Spend: {totalSpend}</p>
          <p>Remaining Budget: {remainingBudget}</p>
        </aside>

        <ExpenseForm app={this.getApp()} />
        <ExpenseList expenses={this.state.expenses} />

        {renderIf(remainingBudget < 0 && !this.state.showErrors,
          <Modal close={() => this.setState({showErrors: !this.state.showErrors})}>
            <h1>Sorry, you have used all your available funds.</h1>
            <p>Current Balance: {remainingBudget}</p>
          </Modal>
        )}
      </div>
    )
  }
}

export default Dashboard
