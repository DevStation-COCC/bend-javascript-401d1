import "./_dashboard-container.scss"
import React from 'react'

import {connect} from 'react-redux'

import {
  categoryCreate as categoryActionCreate, 
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'ready'})
    this.props.categoryCreate({title: 'in progress'})
    this.props.categoryCreate({title: 'review'})
    this.props.categoryCreate({title: 'done'})
  }

  render(){
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm 
          buttonText='create category'
          onComplete={this.props.categoryCreate} 
        />

        {this.props.categorys.map((item) => 
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  }
}

// connect returns a function that can wrap a component
// let bindToStore = connect( mapStateToProps, mapDispatchToProps) 
// // bindToStore will add default props to a component
// let Dashboard = bindToStore(DashboardContainer)
// export default Dashboard

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer)










