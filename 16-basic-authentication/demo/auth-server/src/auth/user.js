'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

userSchema.pre('save', function(next){
  // Normally we would pick a better salt, but for now jut hard code something...
  bcrypt.hash(this.password, 42)
    .then(hashed => {
      this.password = hashed; // Replace plain text password with hashed password
      next();
    })
    .catch(err => {throw err;});
});

// Since authenticate is on the schema's STATICS object, we can use this method statically when importing User to another file
userSchema.statics.authenticate = function(auth) {
  //auth = {username, password}
  
  // Find the user in the database
  return this.findOne({username: auth.username})
    // If one was found, and password matches...
    .then(user => user && user.comparePassword(auth.password))
    .catch(err => err);
};

// The following functions are attached to the schema's METHODS object, which means they can only be invoked from an instanceof a User
userSchema.methods.comparePassword = function(password){
  // Use bcrypts built-in function to compare the passwords
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null); // Return either the user OR null
};

userSchema.methods.generateToken = function() {
  // User a secret stored with dotenv or default to something else
  // ALWAYS USE A SECRET STORED IN A ENV VARIABLE
  return jwt.sign({id:this._id}, process.env.APP_SECRET || 'secret');
};

export default mongoose.model('users', userSchema);
