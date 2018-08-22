import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li><Link to="/welcome/signup">Signup</Link></li>
          <li><Link to="/welcome/signin">Signin</Link></li>
          {this.props.auth ? <li><Link to="/dummy">Dummy</Link></li> : undefined}
        </ul>
      </header>
    )
  }
}
