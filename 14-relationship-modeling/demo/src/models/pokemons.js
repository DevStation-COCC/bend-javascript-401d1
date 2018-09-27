'use strict'; // +60

import mongoose from 'mongoose';
import Trainers from './trainers';

let types = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'bormal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
  'none'
];

const pokemonSchema = mongoose.Schema({
  name: { type:String, required:true },
  level: { type:Number, default:1, max:99, min:1 },
  primary_type: { type:String, lowercase:true, required:true, enum:types },
  secondary_type: { type:String, lowercase:true, default:'none', enum:types },
  trainer: { type:mongoose.Schema.Types.ObjectId, ref: 'trainers' },
});

pokemonSchema.pre('findOne', function(next) {
  this.populate('trainer');
  next();
});

pokemonSchema.pre('save', function(next) {
  let pokemonId = this._id;
  let trainerId = this.trainer;

  Trainers.findById(trainerId)
    .then(trainer => {
      if(!trainer){
        return Promise.reject('Invalid Trainer Specified');
      }

      Trainers.findOneAndUpdate(
        { _id: trainerId },
        { $addToSet: {pokemons: pokemonId} }
      )
        .then(Promise.resolve())
        .catch(err => Promise.reject(err));

    })
    .then(next)
    .catch(err => Promise.reject(err));

});

export default mongoose.model('pokemons', pokemonSchema);
