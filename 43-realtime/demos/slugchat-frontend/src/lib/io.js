import io from 'socket.io-client'

// Create io socket that is connected to our API server
export const socket = io(`${__API_URL__}`)

export const reduxIO = store => next => action => {
  if(typeof action === 'object'){
    if(!action.blockPublish){
      socket.emit(action.type, action.payload)
    }
  }

  next(action)
}

export default (store, subscribers) => {
  Object.keys(subscribers)
    .map(type => ({type, handler: subscribers[type]}))
    .forEach(subscriber => {
      socket.on(subscriber.type, payload => {
        console.log('__SUBSCRIBE_EVENT__', subscriber.type, payload)
        try{
          subscriber.handler(store)(socket)(payload)
        }catch(e){
          console.error('__SUBSCRIBE_ERROR__', e)
        }
      })
    })
}
