const USER_CONNECTED = (store) => (socket) => (payload) => {
  store.dispatch({
    type: 'USER_CONNECTED', 
    payload,
  })
}

const USER_DISCONNECTED = (store) => (socket) => (payload) => {
}

export default {USER_CONNECTED, USER_DISCONNECTED}
