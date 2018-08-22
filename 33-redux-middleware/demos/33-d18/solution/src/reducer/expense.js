let validateCategory = category => {
  if(!category.id || !category.name || !category.timestamp) {
    throw new Error('VALIDATION ERROR: category must include id, title, and timestamp')
  }
}

let validateExpense = expense => {
  if(!expense.id || !expense.price || !expense.name || !expense.categoryId || !expense.timestamp) {
    throw new Error('VALIDATION ERROR: expense must include id, name, price, category id, and timestamp')
  }
}

let initialState = {}

export default (state = initialState, action) => {
  let { type, payload } = action
  
  switch(type) {
    case 'CATEGORY_CREATE': 
      validateCategory(payload)
      return { ...state, [payload.id]: [] }
    case 'CATEGORY_DELETE': 
      validateCategory(payload)
      let categoryDeleteState = state
      delete categoryDeleteState[payload.id]
      return { ...categoryDeleteState}
    case 'EXPENSE_CREATE':
      validateExpense(payload)
      let categoryExpenses = state[payload.categoryId]
      return { ...state, [payload.categoryId]: [...categoryExpenses, payload] }
    case 'EXPENSE_DELETE':
      validateExpense(payload)
      let deleteState = state
      deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => payload.id !== expense.id)
      return {...deleteState}
    case 'EXPENSE_UPDATE':
      validateExpense(payload)
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
