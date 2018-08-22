// npm modules
import React from 'react'
import uuid from 'uuid/v1'

// app modules
import Modal from '../modal'
import Navbar from '../navbar'
import ExpenseList from '../expense-list'
import ExpenseForm from '../expense-form'

let renderIf = (test, component) => test ? component : undefined

class DashboardContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showErrors: true,
    }

    this.expenseCreate = this.expenseCreate.bind(this)
    this.expenseRemove = this.expenseRemove.bind(this)
    this.expenseUpdate = this.expenseUpdate.bind(this)
  }
  // hooks
  // methods
  expenseCreate(expense){
    expense.id = uuid()

    // imutably add the new expense to the old expesses array on apps state
    let {app} = this.props
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense]),
    }))
  }

  expenseRemove(expense){
    let {app} = this.props
    app.setState(prevState => ({
      expenses: prevState.expenses.filter((item) => {
        return item.id !== expense.id 
      })
    }))
  }

  expenseUpdate(expense){
    let {app} = this.props
    app.setState(prevState => ({
      expenses: prevState.expenses.map((item) => {
        return item.id == expense.id ? expense : item
      })
    }))
  }


  //render
  render(){
    let {app} = this.props

    let totalSpent = app.state.expenses.reduce((p, c) => {
      return p + c.price
    }, 0)

    let remaingBudget = app.state.total - totalSpent
    return (
      <div className='dashboard-container'>
        <Navbar />

        <p> total budget: {app.state.total} </p>
        <p> total spent: {totalSpent} </p>
        <p> remaining budget: {remaingBudget} </p>

        <ExpenseForm 
          handleSubmit={this.expenseCreate} 
          submitTitle='add expense' />

        <ExpenseList 
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={app.state.expenses} />

        {renderIf(remaingBudget < 0 && this.state.showErrors, 
          <Modal close={() => this.setState({showErrors: false})}>
            <h1> you have no money </h1>
            <p> current balence {remaingBudget} </p>
          </Modal>
        )}

      </div>
    )
  }
}

export default DashboardContainer
