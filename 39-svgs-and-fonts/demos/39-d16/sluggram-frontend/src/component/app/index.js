import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import * as util from '../../lib/util.js'
import {tokenSet} from '../../action/auth-actions.js'
import LandingContainer from '../landing-container'
import SettingsContainer from '../settings-container'
import appStoreCreate from '../../lib/app-store-create.js'

import kiwiIcon from '../../asset/icon/kiwi.icon.svg'

let Icon = (props) => {
  let innerHtml = {__html: props.data}
  return (
    <div dangerouslySetInnerHTML={innerHtml}></div>
  )
}

class App extends React.Component {
  componentDidMount(){
    let token = util.readCookie('X-Sluggram-Token')
    if(token){
      this.props.tokenSet(token)
    }
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1> cool swee awesome yeeee </h1>
              <i className="fa fa-trash" aria-hidden="true"></i>
              <Icon data={kiwiIcon} />
              <nav>
                <ul>
                  <li><Link to='/welcome/signup'> signup </Link> </li>
                  <li><Link to='/welcome/login'> login </Link> </li>
                  <li><Link to='/settings'> settings </Link> </li>
                </ul>
              </nav>
            </header>

            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/settings' component={SettingsContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
