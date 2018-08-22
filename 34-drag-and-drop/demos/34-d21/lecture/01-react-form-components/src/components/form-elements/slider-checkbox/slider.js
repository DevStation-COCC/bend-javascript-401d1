import './_slider.scss'
import React from 'react'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck(e) {
    console.log(e.target)
  }

  componentDidMount() {
    console.log(this.refs[this.props.config.id].checked)
  }

  render() {
    return (
      <div className={this.props.config.classes}>
        <input
          type="checkbox"
          ref={this.props.config.id}
          id={this.props.config.id}
          // value={this.props.config.value}
          defaultChecked={false}
          onChange={this.props.onChange}/>
        <label htmlFor={this.props.config.id}><div></div></label>
      </div>
    )
  }
}

export default Slider
