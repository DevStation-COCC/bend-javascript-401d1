import React from 'react'
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryReset,
  categoryDelete
} from '../../actions/category-actions';

// Get the form component
import CategoryForm from '../category-form'
import { renderIf } from '../../lib/util';

class DashboardContainer extends React.Component {
  
  // Basic logging
  componentDidMount() {
    console.log('__DASHBOARD__', this)

    this.props.categoryCreate({title: 'pokemongo'});
  }

  render() {
    return ( 
      <main className="dashboard-container">
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText='create form'
          onComplete={this.props.categoryCreate}/>

        {this.props.categories.map(item => {

          return <div key={item.id}>
                  <h3>{item.title}</h3>
                 </div>
        })}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
