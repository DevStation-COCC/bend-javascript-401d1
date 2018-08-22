import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import appStoreCreate from '../../lib/app-create-store'
import LandingContainer from '../landing-container'

const store = appStoreCreate()

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>CF-Gram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                  </ul>
                </nav>
              </header>
              <Route exact path="/welcome/:auth" component={LandingContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App