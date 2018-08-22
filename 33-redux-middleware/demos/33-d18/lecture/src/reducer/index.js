import {combineReducers} from 'redux'
import cardsReducer from './cards'
import categoriesReducer from './category'

export default combineReducers({
  cards: cardsReducer,
  categories: categoriesReducer
})