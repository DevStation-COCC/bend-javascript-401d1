'use strict';

import User from './user.js';

// This is the function/middleware we are exposing to the rest of our server to use
let Authenticatornator = (req, res, next) => {

  // This is a helper method within our middleware
  // Just as if we had a helper method within our class that isn't intented to be used by the user
  let authenticate = (auth) => {
    
    // Make sure the provided username and password can be authenticated...aka make sure that user is in the database AND the password provided matches the password stored
    User.authenticate(auth)
      .then(user => {
        // If we got no error AND we got no user, handle that appropriately
        if(!user){
          //send back bad res
        }else{
          // Otherwise attached the token to the request just like we do when parsing the querystring or params
          // This will allow it to be accessed when we are building our response
          req.token = user.generateToken();
          next();
        }
      })
      .catch(next);
  };



  try{
    let auth = {};
    
    // Grab the Basic Auth header on the request
    let authHeader = req.headers.authorization; //Basic ZnJitUq76

    // Parse the header by:
    // 1. Remove "Basic " from the header thus leaving just the hashed username:password
    // 2. Convert the base64 string to a raw Buffer
    // 3. Conver the raw buffer to a string
    // 4. Split the string on the : so that we have the username and plaintext password
    let base64Header = authHeader.replace(/Basic\s+/i, ''); //ZnjItUq76
    let base64Buffer = Buffer.from(base64Header, 'base64'); // Buffer <01 2a ...>
    let bufferString = base64Buffer.toString(); //adam:pa$$w0rd
    let [username, password] = bufferString.split(':');
    auth = {username, password};

    // Pass the provided username and password to our authenticate method
    authenticate(auth);

  }catch(e){
    next(e);
  }
};

export default Authenticatornator;

