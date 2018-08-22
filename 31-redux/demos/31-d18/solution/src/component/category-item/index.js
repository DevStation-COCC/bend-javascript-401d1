import React from 'react'
import { connect } from 'react-redux'
import CreateForm from '../category-form'
import { categoryDelete } from '../../action/category-actions'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleDelete(e) {
    // console.log(this.props)
    this.props.categoryDelete(this.props.category)
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <li onDoubleClick={this.toggleEdit}>
        {this.state.editing ?
          <CreateForm
            buttonText="update category"
            onComplete={this.props.onComplete}
            category={this.props.category}
            toggle={this.toggleEdit}/> :
          <div>
            <button onClick={this.handleDelete}>x</button>
            <p>{this.props.category.name}</p>
            <p>{this.props.category.budget}</p>
          </div>
        }
      </li>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch, getState) => ({
  categoryDelete: category => dispatch(categoryDelete(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
