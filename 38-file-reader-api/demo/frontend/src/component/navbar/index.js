import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {tokenDeleteRequest} from '../../action/auth-actions'

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.props.auth ?
              <div>
                <li onClick={this.props.tokenDelete}><Link to="/">Logout</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                {this.props.profile ?
                  <div>
                    <h2>Welcome {this.props.profile.username}</h2>
                    <img src={this.props.profile.avatar} style={{"width": "10%"}}/>
                  </div>
                  :
                  undefined
                }
              </div> 
              :
              <div>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/login">Login</Link></li>
              </div>
            }
          </ul>
        </nav>
      </header >
    )
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
})

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDeleteRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
