import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import {Provider} from 'react-redux'
import storeCreate from './lib/store-create'
import io from './lib/io.js'

// This will grab the object of functions from all the subscribers
// server subscribers
import userSubscribers from './subscribe/user.js'
import messageSubscribers from './subscribe/message.js'

const store = storeCreate()

// Easy-export-ready subscriber functions combined into single object
// combine the subscribers
let subscribers = Object.assign(userSubscribers, messageSubscribers)

// Then use the redux-store + subscriber functions to create our io instance
// add them to the io module
io(store, subscribers)

let AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDom.render( <AppContainer/> , document.getElementById('root'))
