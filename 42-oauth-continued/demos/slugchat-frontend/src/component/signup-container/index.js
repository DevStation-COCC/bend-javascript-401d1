import React from 'react'
import * as _ from 'lodash'
import {connect} from 'react-redux'
import superagent from 'superagent'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import  validator from 'validator'


const Tooltip = (props) => {
  return (
    <div className='tooltip'>
      <span className='tooltiptext'>{props.message}</span>    
    </div>
  )
}

export class SignupContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: null,
      usernameError: null,
      passwordError: null,
      usernameAvailable: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateChange = this.validateChange.bind(this)
    this.usernameCheckAvailable = _.debounce(this.usernameCheckAvailable.bind(this), 250)
  }

  // You can imagine this will call an endpoint on the backend to query a database for a particular user name
  // If the query returns a record then send a 500 response since it is taken
  // Else send a 200 response those showing it is available
  usernameCheckAvailable(){
    return superagent.get(`${__API_URL__}/usernames/${this.state.username}`)
      .then(() => this.setState({usernameAvailable: true}))
      .catch(() => this.setState({usernameAvailable: false}))
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.usernameError && !this.state.emailError && !this.state.passwordError){
      console.log('whoat')
      return this.props.signup({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
    }
  }

  validateChange(e){
    let {name, value} = e.target
    let error = null
    // Check if any vial has invalid values and set an error message
    // Take a look: https://github.com/chriso/validator.js
    if(name === 'username'){
      if(!value) {
        error = 'username can not be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = 'username can only contain leters and numbers'
      } 
    } else if (name === 'email'){
      if(!value){
        error = 'email can not be empty'
      } if (!validator.isEmail(value)) {
        error = 'must be a valid email'
      }
    } else if (name === 'password') {
      if(!value){
        error = 'password can not be empty'
      } else if (!validator.isAlphanumeric(value)){
        error = 'password can only contain leters and numbers'
      }
    }

    console.log('error', error)

    // Set the error for the appropriate field
    this.setState({[`${name}Error`]: error})
  }

  handleChange(e){
    // If input is valid...
    this.validateChange(e)
    let {name, value} = e.target
    // Update state with new input
    this.setState({[name]: value})
    if(name === 'username')
      // For usernames specifically, check availability
      this.usernameCheckAvailable()
  }


  render(){
    return (
      <div className='signup-container'>
        <form onSubmit={this.handleSubmit}>
          {/* Eventually can style this to be a nice tooltip */}
          <Tooltip message={this.state.emailError} />
          <input
            name='email'
            type='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Tooltip message={this.state.usernameError} />
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.passwordError} />
          <div className='username-feeback'>
            {util.renderIf(this.state.username, 
              <span>
                {this.state.username} is 
                { this.state.usernameAvailable ? ' available' : ' taken' }
              </span>
            )}
          </div>
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type='submit'> signup </button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(auth.signupRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
