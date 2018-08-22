import io from 'socket.io-client'
import * as util from './util.js'

export const socket = io(`${__API_URL__}`)

export const initSubscribers = (store) => (...subscribers) => {
  let handlers = Object.assign(...subscribers) 
  Object.keys(handlers)
  .map(type => ({type, handler: handlers[type]}))
  .forEach(event => {
    socket.on(event.type, (data) => {
      util.log('__EVENT__', event.type, data)
      try {
      event.handler({
        // overwrite dispatch so that data coming from the server 
        // wont get re-dispatched to the server in the redux-realtime
        dispatch: (action) => store.dispatch({blockRealtime: true, ...action}),
        getState: store.getState,
      })(socket)(data)
      } catch (error) {
      }
    })
  })
}


