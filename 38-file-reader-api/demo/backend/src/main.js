import {start} from './lib/server.js'
start({
  PORT: process.env.PORT, 
  MONGOD_URI: process.env.MONGO_URI
})  
