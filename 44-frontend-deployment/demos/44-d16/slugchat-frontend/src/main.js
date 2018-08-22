import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import {Provider} from 'react-redux'
import storeCreate from './lib/store-create'
import * as realtime from './lib/realtime.js'
import message from './subscribe/message.js'
import user from './subscribe/user.js'

const store = storeCreate()

let AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

// render app
ReactDom.render( <AppContainer/> , document.getElementById('root'))

// subscribe to listeners
realtime.initSubscribers(store)(message, user)
