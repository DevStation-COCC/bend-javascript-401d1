import React from 'react'
import {connect} from 'react-redux'
import AuthForm from '../auth/auth-form'
import {signinRequest, signupRequest} from '../../action/auth-actions'

class Landing extends React.Component {
  render() {
    console.log('__LANDING_PROPS__', this.props)
    let {params} = this.props.match
    let handleComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup

    return (
      <div className="landing-container">
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}/>
      </div>
    )
  }
}

let mapStateToProps = state => ({})

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
