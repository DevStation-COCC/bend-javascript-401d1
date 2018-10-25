let initialState = {}

export default (state = initialState, action) => {
  let { type, payload } = action
  
  switch(type) {
    case 'CATEGORY_CREATE': return { ...state, [payload.id]: [] }
    case 'CATEGORY_DELETE': 
      let categoryDeleteState = state
      delete categoryDeleteState[payload.id]
      return { ...categoryDeleteState}
    case 'EXPENSE_CREATE':
      let categoryExpenses = state[payload.categoryId]
      return { ...state, [payload.categoryId]: [...categoryExpenses, payload] }
    case 'EXPENSE_DELETE':
      let deleteState = state
      deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => payload.id !== expense.id)
      return {...deleteState}
    case 'EXPENSE_UPDATE':
      let updateState = state
      updateState[payload.categoryId] = updateState[payload.categoryId].map(expense => {
        if(expense.id === payload.id) expense = payload
        return expense
      })
      return {...updateState}
    default:
      return state
  }
}