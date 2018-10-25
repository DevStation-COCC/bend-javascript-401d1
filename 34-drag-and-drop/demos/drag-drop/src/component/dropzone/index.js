import React from 'react'
import {classToggler} from '../../lib/util.js'

class DropZone extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dropReady: false,
    }

    this.handleDragEnter = this.handleDragEnter.bind(this)
    this.handleDragLeave = this.handleDragLeave.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDragEnter(e){
    this.setState({dropReady: true})
  }

  handleDragLeave(e) {
    this.setState({dropReady: false})
  }

  handleDragOver(e) {
    e.preventDefault()
  }

  handleDrop(e) {
    e.preventDefault()
    try{
      let item = JSON.parse(e.dataTransfer.getData('application/json'))
      this.props.onComplete(null, item)
    }catch(e){
      this.props.onComplete(e)
    }

    this.setState({dropReady: false})
  }

  render() {
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady,
    })

    return (
      <div 
        className={className} 
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

export default DropZone
