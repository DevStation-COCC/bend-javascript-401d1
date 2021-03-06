import reducer from '../reducer';
import thunk from './redux-thunk.js';
import reporter from './redux-reporter.js';
import {createStore, applyMiddleware} from 'redux';
import listValidator from './middleware/list-validator';

let appStoreCreate = () => 
  createStore(reducer, applyMiddleware(thunk, reporter, listValidator));

export default appStoreCreate;
