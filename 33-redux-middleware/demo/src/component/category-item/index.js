import React from 'react'
import CreateForm from '../category-form'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryEdit: false,
      expenseEdit: false,
      expenseCreate: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleCategoryEdit = this.toggleCategoryEdit.bind(this)
    this.toggleExpenseCreate = this.toggleExpenseCreate.bind(this)
  }

  handleDelete(e, category) {
    this.props.actions.categoryDelete(category)
  }

  toggleCategoryEdit() {
    this.setState({categoryEdit: !this.state.categoryEdit})
  }

  toggleExpenseCreate() {
    this.setState({expenseCreate: !this.state.expenseCreate})
  }

  render() {
    return (
      <section onDoubleClick={this.toggleCategoryEdit} className="budget-item">
        <h4>Category</h4>
        {this.state.categoryEdit ? 
          <CreateForm 
            buttonText="update category"
            onComplete={this.props.actions.categoryUpdate}
            category={this.props.category}
            toggle={this.toggleCategoryEdit}/> :
          <div>
            <button onClick={(ev) => this.handleDelete(ev, this.props.category)}>x</button>
            <button onClick={this.toggleExpenseCreate}>+ expense</button>
            <p>{this.props.category.name}: <span>{this.props.category.budget}</span></p>
            {this.state.expenseCreate ?
              <ExpenseForm
                onComplete={this.props.actions.expenseCreate}
                buttonText="create expense"
                category={this.props.category}
                toggle={this.toggleExpenseCreate}/> : 
              undefined  
            }

            {this.props.expenses.length ?
              <aside className="expense-list">
                <h4>Expenses</h4>
                {this.props.expenses.map(exp => {
                  return <ExpenseItem 
                    key={exp.id}
                    expense={exp}
                    category={this.props.category}
                    actions={this.props.actions}/>
                })}
              </aside> :
              undefined
            }
          </div>
        }
      </section>
    )
  }
}

export default CategoryItem