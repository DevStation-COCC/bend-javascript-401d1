'use strict';

export default (dir) => {
  if ( typeof dir !== "string" ) { return {}; }
  return {
    'foo': {default: true},
    'bar': {default: true},
    'baz': {default: true}
  };
};

