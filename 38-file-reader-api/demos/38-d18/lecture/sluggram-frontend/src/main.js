// import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import {Provider} from 'react-redux'
import appStoreCreate from './lib/app-create-store'

let store = appStoreCreate()

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'))

