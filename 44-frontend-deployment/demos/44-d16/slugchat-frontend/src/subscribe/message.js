const TYPEING_START = (store) => (socket) => (data) => {
  store.dispatch({
    type: 'TYPEING_START', 
    payload: data,
  })
}

const TYPING_STOP = (store) => (socket) => (data) => {
  store.dispatch({type: 
    'TYPEING_STOP', 
    payload: data,
  })
}

const MESSAGE = (store) => (socket) => (data) => {
  store.dispatch({
    type: 'TYPEING_STOP', 
    payload: data,
  })
}

export default {
  MESSAGE,
  TYPING_STOP,
  TYPEING_START,
}
