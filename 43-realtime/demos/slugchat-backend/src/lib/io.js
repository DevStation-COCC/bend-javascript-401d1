import io from 'socket.io';

export default (http, subscribers) => {
  return io(http)
    .on('connection', socket => {
      console.log('CONNECTION_RECEIVED');
      /*
      {
        LOGIN: LOGIN(socket)(payload),
        LOGOUT: LOGOUT(socket)(payload),
        MESSAGE: MESSAGE(socket)(payload)
      }
      */

      // possible helper function name: addSubscriber
      Object.keys(subscribers) // [LOGIN, LOGOUT, MESSAGE]
        /*
        {
          type: LOGIN,
          handler: LOGIN(socket)(payload)
        }
        */
        .map(type => ({type, handler: subscribers[type]}))
        .forEach(subscriber => {
          socket.on(subscriber.type, (payload) => {
            console.log('__SUBSCRIBE_EVENT__', subscriber.type, payload);

            try{
              subscriber.handler(socket)(payload);
            }catch(error){
              console.error('__SUBSCRIBER_ERROR__', error);
            }
          })
        });

    })
    .on('error', error => {
      console.error('__SOCKET_IO_ERROR__', error);
    });
}
