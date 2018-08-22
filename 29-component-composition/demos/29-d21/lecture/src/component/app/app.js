import React from 'react'
import Navbar from '../navbar/navbar'
import Dashboard from '../dashboard/dashboard'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={() => <h1>Home!</h1>}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
