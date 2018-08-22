import React from 'react'

class Dummy extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world! You are authenticated: {this.props.auth}</h1>
      </div>
    )
  }
}

export default Dummy
