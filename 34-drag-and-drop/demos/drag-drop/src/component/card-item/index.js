import React from 'react'
import {connect} from 'react-redux'

import CardForm from '../card-form'
import {renderIf} from '../../lib/util.js'
import {cardUpdate, cardDelete } from '../../action/card-actions.js'

import Draggable from '../draggable';

class CardItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }

    this.handleCardUpdate = this.handleCardUpdate.bind(this)
  }

  handleCardUpdate(card){
    this.props.cardUpdate(card)
    this.setState({editing: false})
  }

  render(){
    let {card, cardDelete, cardUpdate} = this.props
    console.log('cardUpdate', cardUpdate)
    return (
      <li className='card-item'>
        <Draggable dataTransferItem={card}>
          {renderIf(!this.state.editing, 
            <div onDoubleClick={() => this.setState({editing: true})}>
              <p> {card.content} </p>
              <button onClick={() => cardDelete(card)}> delete </button> 
            </div>
          )}

          {renderIf(this.state.editing, 
            <div> 
              <CardForm 
                card={card}
                buttonText='update card'
                onComplete={this.handleCardUpdate}
              />

              <button 
                onClick={() => this.setState({editing: false})}> 
                cancel 
              </button>
            </div>
          )}
        </Draggable>
      </li>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  cardUpdate: (card) => dispatch(cardUpdate(card)),
  cardDelete: (card) => dispatch(cardDelete(card)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem)



