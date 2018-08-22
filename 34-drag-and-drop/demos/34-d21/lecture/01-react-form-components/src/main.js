import './styles/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import SliderCheckbox from './components/form-elements/slider-checkbox/slider'
import FormInput from './components/form-elements/input/input'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      count: 0,
      sliderOne: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  checkSlider(e) {
    console.log(e.target.checked)
    this.setState({sliderOne: !this.state.sliderOne})
  }

  render() {
    return (
      <div className="application">
        <h1>Hello world!</h1>
        <h3>Check out my custom form elements</h3>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <SliderCheckbox
              config={({
                id: 'slider_one',
                classes: 'slider-checkbox',
                value: this.state.sliderOne,
                name: 'slider-one', // working here... need to get this slider into main state
              })}
              onChange={this.checkSlider.bind(this)}/>

            <FormInput
              config={({
                type: 'text',
                name: 'title',
                value: this.state.title,
                placeholder: 'I am a title',
                classes: 'form-input'
              })}
              onChange={this.handleChange}/>

            <FormInput
              config={({
                type: 'number',
                name: 'count',
                value: this.state.count,
                placeholder: '50',
                classes: 'form-input'
              })}
              onChange={this.handleChange}/>

            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
