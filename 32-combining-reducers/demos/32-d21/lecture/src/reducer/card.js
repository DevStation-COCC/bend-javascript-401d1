let initialState = {}

export default (state=initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case 'CATEGORY_CREATE': return {...state, [payload._id]: []}
    case 'CATEGORY_DELETE':
      let categoryState = state
      delete categoryState[payload._id]
      return {...categoryState}
    case 'CARD_CREATE': return {...state, [payload._id]: [...state[payload._id], payload]}
    default: return state
  }
}
