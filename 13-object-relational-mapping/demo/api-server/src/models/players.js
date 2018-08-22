'use strict';

import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, uppercase:true, required:true },
  bats: { type:String, uppercase:true, default:'R', enum:['R','r','L','l'] },
  throws: { type:String, uppercase:true, default:'R', enum:['R','r','L','l'] },
});

export default mongoose.model('players', playerSchema);
