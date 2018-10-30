import React from 'react';
import {connect} from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util.js';
import * as listActions from '../../action/list-actions.js';
import * as authActions from '../../action/auth-actions.js';

class Dashboard extends React.Component {

  componentDidMount(){
    if(!this.props.token && localStorage.token) {
      this.props.tokenSet(localStorage.token);
    }
    this.props.listsFetch(this.props.token);
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> Dashboard </h2>
        <ListForm 
          buttonText='create list'
          token={this.props.token}
          onComplete={this.props.listCreate}
          />
        
        {this.props.lists.map(list => 
          <div key={list._id}>
            {list.title} 
            <button
              onClick={() => this.props.listDelete(list)}>
              delete 
            </button>
          </div>
        )}

      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  lists: state.lists,
  token: state.auth,
});

let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listsFetch: (token) => dispatch(listActions.listsFetchRequest(token)),
  tokenSet: (token) => dispatch(authActions.tokenSet(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);


