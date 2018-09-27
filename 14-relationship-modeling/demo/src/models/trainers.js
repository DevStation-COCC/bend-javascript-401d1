'use strict';

import mongoose from 'mongoose';

const trainerSchema = mongoose.Schema({
  name: { type:String, required:true },
  pokemons: [{ type:mongoose.Schema.Types.ObjectId, ref: 'pokemons'}],
});

trainerSchema.pre('findOne', function(next) {
  this.populate('pokemons');
  next();
});

export default mongoose.model('trainers', trainerSchema);
