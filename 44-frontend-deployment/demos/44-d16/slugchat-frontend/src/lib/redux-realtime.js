import * as realtime from './realtime.js'

export default (store) => (next) => (action) => {
  // only emit the payload if the action is comming from this client

  if(!action.blockRealtime)
    realtime.socket.emit(action.type, action.payload)
  next(action)
}
