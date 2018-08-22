import React from 'react'
import {connect} from 'react-redux'
import {
  categoryCreate, 
  categoryUpdate, 
  categoryDelete, 
  categoryReset
} from '../../action/category-actions'
import * as utils from '../../lib/util'
import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this)
    this.props.categoryCreate({ name: 'pokemon', budget: 100 })
    this.props.categoryCreate({ name: 'star wars', budget: 200 })
    this.props.categoryCreate({ name: 'dune', budget: 300 })
  }

  render() {
    return ( 
      <main className="dashboard-container">
        <h2>Dashboard</h2>

        <CategoryForm 
          buttonText="create form"
          onComplete={this.props.categoryCreate}/>

        {utils.renderIf(this.props.categories,
          <ul>
            {this.props.categories.map(item => 
              <CategoryItem key={item.id} category={item} onComplete={this.props.categoryUpdate}/>)}
          </ul>
        )}
      </main>
    )
  }
}

const mapStateToProps = state => { 
  return {
    categories: state 
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)