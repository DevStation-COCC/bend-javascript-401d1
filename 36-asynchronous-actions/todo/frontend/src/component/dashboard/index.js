import React from 'react';
import {connect} from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util.js';
import * as listActions from '../../action/list-actions.js';

class Dashboard extends React.Component {

  componentDidMount(){
    this.props.listsFetch();
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> Dashboard </h2>
        <ListForm 
          buttonText='create list'
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

let mapStateToProps = (state) => ({lists: state.lists});
let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
  listDelete: (list) => dispatch(listActions.listDeleteRequest(list)),
  listsFetch: () => dispatch(listActions.listsFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);


