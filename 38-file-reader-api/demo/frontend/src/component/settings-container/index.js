import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import {profileCreateRequest, profileFetchRequest} from '../../action/profile-actions';

class SettingsContainer extends React.Component{
  componentWillMount(){
    this.props.profileFetch();
  }

  render(){
    return (
      <div className="settings-container">
        {this.props.auth && !this.props.profile ?
          <div>
            <h2>Profile Settings</h2>
            <ProfileForm
              buttonText="create"
              onComplete={this.props.profileCreate}
            />
          </div>
        : null
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth
  }
}

let mapDispatchToProps = dispatch => {
  return {
    profileCreate: profile => dispatch(profileCreateRequest(profile)),
    profileFetch: () => dispatch(profileFetchRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);