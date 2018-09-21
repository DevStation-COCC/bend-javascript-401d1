'use strict';

jest.mock('require-dir');

import modelFinder from '../../../src/middleware/models.js';

describe('Model Finder Middleware', () => {
  it('throws an error if a valid model is not presnt', () => {
    let req = {};
    let res = {};
    let next = () => {};
    expect( () => {
      modelFinder(req,res,next)
    }).toThrow();
  });
  it('returns a model object/function when a valid model is requested', () => {
    let req = {params:{model:'foo'}};
    let res = {};
    let next = () => {};
    modelFinder(req,res,next);
    expect(req.model).toBeDefined();
  });
});