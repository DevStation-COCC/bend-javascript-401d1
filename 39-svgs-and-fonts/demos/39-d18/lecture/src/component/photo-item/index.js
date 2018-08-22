import React from 'react'
import {connect} from 'react-redux'
import PhotoForm from '../photo-form'
import * as utils from '../../lib/utils'
import {userPhotoUpdateRequest, userPhotoDeleteRequest} from '../../action/photo-actions'

class PhotoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <div className="photo-items">
        {utils.renderIf(!this.state.editing, 
          <div>
            <img src={this.props.photo.url} style={{ "width": "25%" }}/>
            <p>{this.props.photo.description}</p>
            <i onClick={() => this.props.deletePhoto(this.props.photo)}>x</i>
            <i onClick={() => this.setState({editing: !this.state.editing})}>edit</i>
          </div>
        )}

        {utils.renderIf(this.state.editing,
          <div>
            <PhotoForm 
              photo={this.props.photo}
              buttonText="update"
              toggle={this.toggleEdit}
              onComplete={this.props.updatePhoto}/>
          </div>
        )}
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  deletePhoto: photo => dispatch(userPhotoDeleteRequest(photo)),
  updatePhoto: photo => dispatch(userPhotoUpdateRequest(photo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem)