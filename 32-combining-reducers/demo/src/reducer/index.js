import {combineReducers} from 'redux';
import expensesReducer from './expense';
import categoryReducer from './category';

export default combineReducers({
  expenses: expensesReducer,
  categories: categoryReducer
});


// Just another way to do it
// import expenses from './expense';
// import categories from './category';

// export default combineReducers({expenses, categories});
