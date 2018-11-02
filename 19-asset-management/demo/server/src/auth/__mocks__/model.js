'use strict';

module.exports = {

  authenticate: (auth) => {
    if ( (!!auth.username && !!auth.password) ) {
      return Promise.resolve({
        generateToken: () => {return 'token!';},
      });
    }
    else {
      return Promise.resolve(null);
    }
  },

};
