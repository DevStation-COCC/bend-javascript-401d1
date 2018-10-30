import * as util from '../util';

export default store => next => action => {
  // payload expected to be undefined/null for LIST_SET actions
  if(!action.type.includes('LIST') || action.type.includes('SET')){
    return next(action);
  }

  try {
    if(!action.payload._id)
      throw new Error('VALIDATION ERROR: list must have _id');
    if(!action.payload.title)
      throw new Error('VALIDATION ERROR: list must have title');

    return next(action);
  } catch (err) {
    err.action = action;
    util.logError('__ERROR__', err);
    return err;
  }
}