import {combineReducers} from 'redux'
import profile from './profile'
import photos from './photo'
import auth from './auth'

export default combineReducers({
  auth,
  profile,
  photos,
})