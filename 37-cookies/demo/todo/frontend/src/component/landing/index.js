import React from 'react'
import {connect} from 'react-redux'
import AuthForm from '../auth-form';
import {signupRequest, loginRequest} from '../../action/auth-actions';

class Landing extends React.Component {
  render(){
    let {params} = this.props.match;
    console.log('history', this.props.history);

    let handleComplete = params.auth === 'signup' ? this.props.signup : this.props.login;

    return (
      <div>
        <AuthForm
          onComplete={handleComplete}
          auth={params.auth}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
})

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Landing)