import React from 'react'
import * as utils from '../../lib/utils'

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.profile ? 
      {...props.profile, preview: ''} : 
      {bio: '', avatar: null, preview: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props.profile) this.setState(props.profile)
  }

  handleChange(e) {
    let {type, name} = e.target
    if(name === 'bio') this.setState({bio: e.target.value})
    if(name === 'avatar') {
      let {files} = e.target
      let avatar = files[0]
      this.setState({avatar})

      utils.photoToDataUrl(avatar)
      .then(preview => this.setState({preview}))
      .catch(console.error)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('form', this.state)
    this.props.onComplete(this.state)
  }

  render() {
    return (
      <form 
        className="profile-form"
        onSubmit={this.handleSubmit}>

        <img src={this.state.preview} style={{"width": "25%"}}/>
        <input 
          type="file"
          name="avatar"
          onChange={this.handleChange}/>
        
        <textarea 
          name="bio"
          cols="30" 
          rows="10"
          value={this.state.bio}
          onChange={this.handleChange}>
        </textarea>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ProfileForm