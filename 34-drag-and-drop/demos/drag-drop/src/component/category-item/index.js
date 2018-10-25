import React from 'react'
import {connect} from 'react-redux'

import Dropzone from '../dropzone'
import CardForm from '../card-form'
import CardItem from '../card-item'
import CategoryForm from '../category-form'

import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import {
  cardCreate,
  cardInsert,
  cardDelete,
} from '../../action/card-actions.js'

class CategoryItem extends React.Component {
  constructor(props){
    super(props)

    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this)
  }

  handleDropzoneComplete(err, card){
    if (err)
      return console.error(err)
    // remove for old categegory 
    this.props.cardDelete(card)

    // update new category id 
    card.categoryID = this.props.category.id

    // insert into new category
    this.props.cardInsert(card)
  }

  render(){
    let {category, categoryUpdate, categoryDelete, cards} = this.props
    return (
      <div className='category-item'>
      <Dropzone onComplete={this.handleDropzoneComplete} >
        <header>
          <div className='content'>
            <h2> {category.title} </h2>
            <button onClick={() => categoryDelete(category)}>
              delete
            </button>
          </div>
          <div className='editing'>
            <CategoryForm 
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
              />
          </div>
        </header>

        <main>
          <CardForm
            categoryID={category.id}
            buttonText='create card'
            onComplete={this.props.cardCreate}
            />

            <ul>
              {cards.map(card => 
                <CardItem key={card.id} card={card} />
              )}
            </ul>
        </main>
        </Dropzone>

      </div>
    )
  }
}

let mapStateToProps = (state, props) => ({
  cards: state.cards[props.category.id]
})

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  cardCreate: (card) => dispatch(cardCreate(card)),
  cardInsert: (card) => dispatch(cardInsert(card)),
  cardDelete: (card) => dispatch(cardDelete(card)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItem)







