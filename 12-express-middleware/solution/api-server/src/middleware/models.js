'use strict';

import requireAll from 'require-dir';
const models = requireAll('../models');

export default (req,res,next) => {
  try {
    let model = req && req.params && req.params.model;
    if ( model && models[model] ) {
      req.model = model;
      next();
    }
    else { throw 'Model not found'; }
  }
  catch(e) {
    throw e;
  }
};
