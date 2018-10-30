import React from 'react';
import * as util from '../../lib/util';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => {
        this.setState({
          username: '',
          email: '',
          password: ''
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        {util.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />)}

          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type='submit'>{this.props.auth}</button>
      </form>
    )
  }
}

export default AuthForm;