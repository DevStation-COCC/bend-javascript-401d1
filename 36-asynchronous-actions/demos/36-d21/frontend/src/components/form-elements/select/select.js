import './_select.scss'
import React from 'react'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selecting: false,
      current: {name: 'undefined'},
    }

    this.captureSelection = this.captureSelection.bind(this)
  }

  componentWillReceiveProps(props) {
    if(this.state.current.name === 'undefined') this.setState({current: props.items[0]})
    console.log('received')
  }

  captureSelection(e) {
    this.setState({
      selecting: !this.state.selecting,
      current: this.props.items.filter(item => item._id === e.target.id)[0]
    })

    this.props.onChange(this.state.current)
  }

  render() {
    return (
      <div className="select-container">
        <ul className="dropdown" onClick={this.captureSelection}>
          <li >{this.state.current.name}</li>
          {this.props.items && this.state.selecting ?
            this.props.items.map(album => <li key={album._id} id={album._id}>{album.name}</li>)
              :
            undefined
          }
        </ul>
      </div>
    )
  }
}

export default Select
