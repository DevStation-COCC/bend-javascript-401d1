import React from 'react'

class ExpenseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseList: this.props.app.state.expenses.map(e => <li key={e.id}>{e.title}: {e.price}</li>)
    }
  }
  
  // componentDidMount() {
  //   console.log('__STATE__S', this.state)
  //   console.log('__PROPS__S', this.props)
  // }

  render() {
    return (
      <div className="expense-list">
        <ul>{this.state.expenseList}</ul>
      </div>
    )
  }
}

export default ExpenseList