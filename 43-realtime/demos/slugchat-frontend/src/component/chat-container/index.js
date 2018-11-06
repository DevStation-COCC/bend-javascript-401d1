import React from 'react'
import {connect} from 'react-redux'
import * as chat from '../../action/chat.js'

export class ChatContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHistoryMap = this.handleHistoryMap.bind(this);
  }

  handleChange(e){
    this.setState({content: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.messageCreate({
      meta: false,
      content: this.state.content,
    });
    this.setState({content: ''})
  }

  render(){
    return (
      <div className='chat-container'>
        <h1> welcome to slugchat chat </h1>


        <form onSubmit={this.handleSubmit}>
          <textarea 
            value={this.state.content}
            onChange={this.handleChange} />
          <button type='submit'> send </button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  messageCreate: (message) => dispatch(chat.message(message)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainer)
