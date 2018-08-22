'use strict'
let intialState = []
export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      return state.map(category => 
        category.id == payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id)
    case 'CATEGORY_RESET':
      return intialState
    default:
      return state
  }
}


//state = reducer(undefined, {type: null})

//state = reducer(state, {type: 'CATEGORY_CREATE', payload: {id: '123', title: 'cool'}})

//state = reducer(state, {type: 'CATEGORY_CREATE', payload: {id: 'abc', title: 'beans'}})

//state = reducer(state, {type: 'CATEGORY_UPDATE', payload: {id: '123', title: 'iwat'}})

//state = reducer(state, {type: 'CATEGORY_DELETE', payload: {id: '123', title: 'iwat'}})



//state = reducer(state, {type: 'CATEGORY_RESET'})
