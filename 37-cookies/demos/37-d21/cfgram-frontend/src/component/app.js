import React from 'react'
import Navbar from './navbar'
import Landing from './landing'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

const store = createStore()

export default class App extends React.Component {
  componentWillMount() {
    if(localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
  }
  // need to get state in the App component to do the redirect.
  render() {
    let {token} = store.getState()

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar auth={token}/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/authorized" component={() =>
                token
                  ? <Dummy auth={token} />
                  : <Redirect to="/welcome/signin" />
              } />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

