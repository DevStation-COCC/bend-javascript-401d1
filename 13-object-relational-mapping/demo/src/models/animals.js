'use strict';

import mongoose from 'mongoose';

const animalSchema = mongoose.Schema({
  name: { type:String, required:true },
  species: { type:String, uppercase:true, required:true },
  age: { type:Number, max:99, min:0, default:0},
  sex: { type:String, uppercase:true, default:'U', enum:['M','m','F','f', 'U'] },
  createdOn: { type:Date, default: Date.now() },
});

export default mongoose.model('animals', animalSchema);
