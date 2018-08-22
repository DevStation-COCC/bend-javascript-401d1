import React from 'react'
import {connect} from 'react-redux'
import AuthForm from '../auth-form'
import {signupRequest, loginRequest} from '../../action/auth-actions'

class LandingContainer extends React.Component {
  render() {
    console.log('__LC_PROPS__', this.props)
    let {params} = this.props.match
    let handleComplete = params.auth === 'login' ? this.props.login : this.props.signup

    return (
      <div>
        <AuthForm 
          auth={params.auth}
          onComplete={handleComplete}/>
      </div>
    )
  }  
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)),
    login: user => dispatch(loginRequest(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)