import React from 'react'
import Dashboard from './dashboard'
import {Provider} from 'react-redux'
import createStore from '../lib/store'
import {BrowserRouter, Route} from 'react-router-dom'

let store = createStore()

class App extends React.Component {
  render() {
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App
