import {combineReducers} from 'redux'

import cardsReducer from './cards.js'
import categorysReducer from './category.js'

export default combineReducers({
  cards: cardsReducer,
  categorys: categorysReducer,
})
