import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/util'

import {
  categoryCreate, 
  categoryUpdate, 
  categoryDelete, 
  categoryReset
} from '../../action/category-actions'

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
  expenseReset
} from '../../action/expense-actions'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

export class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this)
    this.props.actions.categoryCreate({ name: 'star wars', budget: 200 })
    this.props.actions.categoryCreate({ name: 'dune', budget: 300 })
  }

  render() {
    return ( 
      <main className="dashboard-container">
        <h2>Dashboard</h2>

        <CategoryForm 
          buttonText="create form"
          onComplete={this.props.actions.categoryCreate}/>

        {utils.renderIf(this.props.categories,
          <div>
            {this.props.categories.map(item => 
              <CategoryItem key={item.id} category={item} actions={this.props.actions} expenses={this.props.expenses[item.id]}/>)}
          </div>
        )}
      </main>
    )
  }
}

export const mapStateToProps = state => { 
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
}

export const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      categoryCreate: category => dispatch(categoryCreate(category)),
      categoryUpdate: category => dispatch(categoryUpdate(category)),
      categoryDelete: category => dispatch(categoryDelete(category)),
      expenseCreate: expense => dispatch(expenseCreate(expense)),
      expenseUpdate: expense => dispatch(expenseUpdate(expense)),
      expenseDelete: expense => dispatch(expenseDelete(expense)),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)