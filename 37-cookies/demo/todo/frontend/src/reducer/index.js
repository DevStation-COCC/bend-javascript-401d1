import {combineReducers} from 'redux';
import lists from './list.js';
import auth from './auth.js';

export default combineReducers({ lists, auth });
