import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import appStoreCreate from '../../lib/app-store-create.js'
import LandingContainer from '../landing-container'

let store =  appStoreCreate()

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <h1> cool swee awesome yeeee </h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'> signup </Link> </li>
                    <li><Link to='/welcome/login'> login </Link> </li>
                  </ul>
                </nav>
              </header>

              <Route path='/welcome/:auth' component={LandingContainer} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
