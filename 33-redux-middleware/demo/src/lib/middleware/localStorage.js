let saveToLocalStorage = store => next => action => {
  let result;
  try{
    result = next(action);
  }catch(e){
    e.action = action;
    console.error('__ERROR__', e);
    throw e;
  }

  let state = store.getState();

  for(key in state){
    if(Object.prototype.hasOwnProperty.call(state, key)){
      localStorage[key] = JSON.stringify(state[key]);
    }
  }

  return result;
};

export default saveToLocalStorage;
