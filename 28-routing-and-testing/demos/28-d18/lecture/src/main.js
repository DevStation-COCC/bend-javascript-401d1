'use strict'

import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: 400,
      expenses: [],
    }

    this.getApp = this.getApp.bind(this)
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/dashboard">dashboard</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <BrowserRouter>
            <section>
              <Route exact path='/about' component={AboutContainer} />
              <Route exact path='/dashboard' component={() => <DashboardContainer app={this.getApp()} />} />
            </section>
          </BrowserRouter>
        </main>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))