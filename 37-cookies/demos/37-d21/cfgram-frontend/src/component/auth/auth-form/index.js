import React from 'react'

class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'Username Required' : null,
      passwordError: name === 'password' && !value ? 'Password Required' : null,
      emailError: name === 'email' && !value ? 'Email Required' : null,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let {username, password, email} = this.state
    this.props.onComplete({username, password, email})
    .then(() => this.setState({username: '', email: '', password: ''}))
    .catch(error => this.setState({error}))
  }

  render() {
    return (
      <form
        className="auth-form"
        onSubmit={this.handleSubmit}>

        {this.props.auth === 'signup' ?
          <input
            type="email"
            name="email"
            placeholder="john.smith@example.com"
            value={this.state.email}
            onChange={this.handleChange}/>
          :
          undefined
        }
        {this.state.emailError ? <span className="tooltip">this.state.emailError</span> : undefined}

        <input
          type="text"
          name="username"
          placeholder="johnsmith44"
          value={this.state.username}
          onChange={this.handleChange} />
        {this.state.usernameError ? <span className="tooltip">this.state.usernameError</span> : undefined}

        <input
          type="password"
          name="password"
          placeholder="helloworldfromjurassicpark"
          value={this.state.password}
          onChange={this.handleChange} />
        {this.state.passwordError ? <span className="tooltip">this.state.passwordError</span> : undefined}

        <button type="submit">{this.props.auth}</button>
      </form>
    )
  }
}

export default AuthForm
