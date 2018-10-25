let logger = store => next => action => {
  try{
    console.log('__ACTION__', action);
    let result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch(e) {
    e.action = action;
    console.error('__ERROR__', e);
    throw e;
  }
};

export default logger;