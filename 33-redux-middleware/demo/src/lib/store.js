import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from './middleware/logger'
import saveToLocalStorage from './middleware/saveToLocalStorage'

// Write some code using require-dir that dynamically creates this middleware array
let middleware = [logger, saveToLocalStorage];

export default () => createStore(reducer, applyMiddleware(...middleware));