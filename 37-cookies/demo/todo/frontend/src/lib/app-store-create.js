import reducer from '../reducer';
// import thunk from './redux-thunk.js';
import ReduxThunk from 'redux-thunk'
import reporter from './redux-reporter.js';
import {createStore, applyMiddleware} from 'redux';

let appStoreCreate = () => 
  createStore(reducer, applyMiddleware(ReduxThunk, reporter));

export default appStoreCreate;
