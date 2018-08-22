import React from 'react'
import {connect} from 'react-redux'
import * as utils from '../../lib/utils'
import PhotoForm from '../photo-form'
import PhotoItem from '../photo-item'
import {userPhotosFetchRequest, userPhotoCreateRequest} from '../../action/photo-actions'

class DashboardContainer extends React.Component {
  componentDidMount() {
    if(!this.props.photos.length) this.props.photosFetch()
  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <PhotoForm 
          buttonText="create"
          onComplete={this.props.photoCreate}/>

        {this.props.photos.map(photo => <PhotoItem key={photo._id} photo={photo} />)}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  photos: state.photos,
})

let mapDispatchToProps = dispatch => ({
  photoCreate: photo => dispatch(userPhotoCreateRequest(photo)),
  photosFetch: () => dispatch(userPhotosFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)