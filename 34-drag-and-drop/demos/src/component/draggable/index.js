import React from 'react'


// props 
// * dataTransferItem -- will be stored as JSON on the drag event
class Draggable extends React.Component {
  constructor(props){
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
  }

  handleDragStart(e){
    let jsonItem = JSON.stringify(this.props.dataTransferItem)
    e.dataTransfer.setData('application/json', jsonItem)
  }

  render(){
    return (
      <div 
        className='draggable' 
        draggable
        onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    )
  }
}

export default Draggable
