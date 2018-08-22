import React from 'react'
import {renderIf} from '../../lib/utils'

class ExpenseList extends React.Component {
  render() {
    return (
      <div className="expense-list">
        {renderIf(this.props.expenses,
          <ul>
            {this.props.expenses.map((expense, index) =>
              <li key={index}>{expense.name}:${expense.price}</li>)
            }
          </ul>
        )}
      </div>
    )
  }
}

export default ExpenseList



