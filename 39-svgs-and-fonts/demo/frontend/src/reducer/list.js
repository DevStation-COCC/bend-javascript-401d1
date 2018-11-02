let validateList = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: list must have _id');
  if(!payload.title)
    throw new Error('VALIDATION ERROR: list must have title');
}

// reducer is only for fontend state
// it canot talk to the database
export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
    case 'LIST_SET':
      return payload;
    case 'LIST_CREATE':
      // validateList(payload)
      return [payload, ...state];
    case 'LIST_UPDATE':
      // validateList(payload);
      return state.map(item => 
        item._id === payload._id ? payload : item);
    case 'LIST_DELETE':
      // validateList(payload);
      return state.filter(item => 
        item._id !== payload._id);
    default:
      return state;
  }
}
