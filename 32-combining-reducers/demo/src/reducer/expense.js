let initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CATEGORY_CREATE': return { ...state, [payload.id]: [] }
    case 'CATEGORY_DELETE':
      let categoryDeleteState = state;
      delete categoryDeleteState[payload.id];
      return {...categoryDeleteState};

    case 'EXPENSE_CREATE':
      let categoryExpenses = state[payload.categoryId];
      return { ...state, [payload.categoryId]: [...categoryExpenses, payload] }

    default: return state;
  }
};