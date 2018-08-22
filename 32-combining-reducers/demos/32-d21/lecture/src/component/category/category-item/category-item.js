import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from '../category-form/category-form'
import {categoryUpdate, categoryDelete} from '../../../action/category-actions'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.category ? this.props.category : {},
      editing: false,
    }
    this.handleEditing = this.handleEditing.bind(this)
  }

  handleEditing() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <div className="category-item" onDoubleClick={this.handleEditing}>
        <h3>{this.state.category.title}</h3>
        <p onClick={() => this.props.categoryDelete(this.state.category)}>x</p>
        <CategoryForm
          buttonText="update"
          onComplete={this.props.categoryUpdate}/>
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch, getState) => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
