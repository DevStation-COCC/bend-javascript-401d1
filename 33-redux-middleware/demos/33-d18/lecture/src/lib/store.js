import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import reporter from './redux-reporter'

export default () => createStore(reducer, applyMiddleware(reporter))