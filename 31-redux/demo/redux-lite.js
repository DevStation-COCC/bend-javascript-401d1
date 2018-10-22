'use strict';

// Act like the store
const reduxLite = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
  };

  dispatch({});

  return {getState, dispatch, subscribe};
};







let actions = {
  INC: {
    type: 'INCREMENT',
    payload: { amount: 1 }
  },
  DEC: {
    type: 'DECREMENT'
  }
};

let reducer = (state = 0, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'INCREMENT':
      return state + payload.amount || 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = reduxLite(reducer);

let render = () => console.log('Listener1', store.getState());
let render2 = () => console.log('Listener2', store.getState());

store.subscribe(render2);
store.subscribe(render);

store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.INC);
store.dispatch(actions.DEC);











